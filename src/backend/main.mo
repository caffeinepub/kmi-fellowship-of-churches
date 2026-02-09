import Text "mo:core/Text";
import List "mo:core/List";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Nat "mo:core/Nat";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

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

  let appointmentRequests = List.empty<AppointmentRequest>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Appointment Request Management
  public shared ({ caller }) func submitAppointmentRequest(request : AppointmentRequest) : async () {
    // Only authenticated users can submit requests (prevents anonymous spam)
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can submit appointment requests");
    };

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

    appointmentRequests.add({
      request with
      submittedBy = ?caller;
      submittedAt = 0; // Placeholder, ideally timestamp
    });
  };

  public query ({ caller }) func getAllRequests() : async [AppointmentRequest] {
    // Only admins can view all requests (contains sensitive personal data)
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all appointment requests");
    };
    appointmentRequests.toArray();
  };
};
