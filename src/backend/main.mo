import Text "mo:core/Text";
import List "mo:core/List";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Nat "mo:core/Nat";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import Time "mo:core/Time";
import Iter "mo:core/Iter";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type RequestType = {
    #consultation;
    #speakingEngagement;
    #prayerCounseling;
    #mediaInterview;
    #other;
  };

  public type UrgencyLevel = {
    #routine;
    #timeSensitive;
    #emergency;
  };

  public type AppointmentRequest = {
    fullName : Text;
    emailAddress : Text;
    phoneNumber : Text;
    churchOrOrganization : ?Text;
    requestType : RequestType;
    leaderRequested : Text;
    preferredDate : Int;
    preferredTime : Nat;
    urgencyLevel : UrgencyLevel;
    details : Text;
    consentGiven : Bool;
    submittedBy : ?Principal;
    submittedAt : Int;
  };

  public type UserProfile = {
    name : Text;
    email : Text;
    phone : Text;
  };

  public type PrayerRequest = {
    id : Nat;
    fullName : Text;
    emailAddress : Text;
    phoneNumber : ?Text;
    prayerRequest : Text;
    urgencyLevel : UrgencyLevel;
    isEmergency : Bool;
    submittedAt : Int;
    submittedBy : ?Principal;
    status : RequestStatus;
  };

  public type RequestStatus = {
    #open;
    #inProgress;
    #resolved;
  };

  let appointmentRequests = List.empty<AppointmentRequest>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  let prayerRequests = Map.empty<Nat, PrayerRequest>();

  var prayerRequestCounter = 0;

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    checkUserOnly(caller);
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    checkUserOnly(caller);
    userProfiles.add(caller, profile);
  };

  // Appointment Request Management
  public shared ({ caller }) func submitAppointmentRequest(request : AppointmentRequest) : async () {
    checkUserOnly(caller);
    validateAppointmentRequest(request);

    appointmentRequests.add({
      request with
      submittedBy = ?caller;
      submittedAt = Time.now();
    });
  };

  public query ({ caller }) func getAllRequests() : async [AppointmentRequest] {
    checkAdminOnly(caller);
    appointmentRequests.toArray();
  };

  // Prayer Request Functionality

  public shared ({ caller }) func submitPrayerRequest(fullName : Text, emailAddress : Text, phoneNumber : ?Text, prayerRequest : Text, urgencyLevel : UrgencyLevel) : async Nat {
    checkUserOnly(caller);

    if (fullName.size() == 0) {
      Runtime.trap("Full Name is required");
    };
    if (emailAddress.size() == 0) {
      Runtime.trap("Email Address is required");
    };
    if (prayerRequest.size() == 0) {
      Runtime.trap("Prayer Request content is required");
    };

    let newId = prayerRequestCounter;
    let newPrayerRequest = {
      id = newId;
      fullName;
      emailAddress;
      phoneNumber;
      prayerRequest;
      urgencyLevel;
      isEmergency = false;
      submittedAt = Time.now();
      submittedBy = ?caller;
      status = #open;
    };

    prayerRequests.add(newId, newPrayerRequest);
    prayerRequestCounter += 1;
    newId;
  };

  public shared ({ caller }) func submitEmergencyPrayer(fullName : Text, emailAddress : Text, prayerRequest : Text) : async Nat {
    checkUserOnly(caller);

    // Emergency flag set to true and high urgency
    let newId = prayerRequestCounter;
    let newPrayerRequest = {
      id = newId;
      fullName;
      emailAddress;
      phoneNumber = null;
      prayerRequest;
      urgencyLevel = #emergency;
      isEmergency = true;
      submittedAt = Time.now();
      submittedBy = ?caller;
      status = #open;
    };

    prayerRequests.add(newId, newPrayerRequest);
    prayerRequestCounter += 1;
    newId;
  };

  public query ({ caller }) func getPrayerRequest(id : Nat) : async ?PrayerRequest {
    checkAdminOnly(caller);
    prayerRequests.get(id);
  };

  public query ({ caller }) func getAllPrayerRequests() : async [PrayerRequest] {
    checkAdminOnly(caller);
    prayerRequests.values().toArray();
  };

  public query ({ caller }) func getEmergencyPrayerRequests() : async [PrayerRequest] {
    checkAdminOnly(caller);
    prayerRequests.values().filter(func(request) { request.isEmergency }).toArray();
  };

  public shared ({ caller }) func updatePrayerRequestStatus(id : Nat, newStatus : RequestStatus) : async () {
    checkAdminOnly(caller);

    switch (prayerRequests.get(id)) {
      case (null) { Runtime.trap("Prayer request not found") };
      case (?existing) {
        let updatedRequest = { existing with status = newStatus };
        prayerRequests.add(id, updatedRequest);
      };
    };
  };

  // Helper functions for permission checks and validation
  func checkAdminOnly(caller : Principal) {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
  };

  func checkUserOnly(caller : Principal) {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can perform this action");
    };
  };

  func validateAppointmentRequest(request : AppointmentRequest) {
    if (request.fullName.size() == 0) {
      Runtime.trap("Full Name is required");
    };
    if (request.emailAddress.size() == 0) {
      Runtime.trap("Email Address is required");
    };
    if (request.phoneNumber.size() == 0) {
      Runtime.trap("Phone Number is required");
    };
    if (request.leaderRequested.size() == 0) {
      Runtime.trap("Leader You Are Requesting to Meet With is required");
    };
    if (not request.consentGiven) {
      Runtime.trap("Consent/Acknowledgement must be given");
    };
  };
};
