import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PrayerRequest {
    id: bigint;
    isEmergency: boolean;
    status: RequestStatus;
    urgencyLevel: UrgencyLevel;
    prayerRequest: string;
    fullName: string;
    submittedAt: bigint;
    submittedBy?: Principal;
    emailAddress: string;
    phoneNumber?: string;
}
export interface AppointmentRequest {
    urgencyLevel: UrgencyLevel;
    fullName: string;
    submittedAt: bigint;
    submittedBy?: Principal;
    churchOrOrganization?: string;
    preferredDate: bigint;
    preferredTime: bigint;
    consentGiven: boolean;
    details: string;
    emailAddress: string;
    phoneNumber: string;
    requestType: RequestType;
    leaderRequested: string;
}
export interface UserProfile {
    name: string;
    email: string;
    phone: string;
}
export enum RequestStatus {
    resolved = "resolved",
    open = "open",
    inProgress = "inProgress"
}
export enum RequestType {
    other = "other",
    speakingEngagement = "speakingEngagement",
    mediaInterview = "mediaInterview",
    prayerCounseling = "prayerCounseling",
    consultation = "consultation"
}
export enum UrgencyLevel {
    emergency = "emergency",
    routine = "routine",
    timeSensitive = "timeSensitive"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllPrayerRequests(): Promise<Array<PrayerRequest>>;
    getAllRequests(): Promise<Array<AppointmentRequest>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getEmergencyPrayerRequests(): Promise<Array<PrayerRequest>>;
    getPrayerRequest(id: bigint): Promise<PrayerRequest | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitAppointmentRequest(request: AppointmentRequest): Promise<void>;
    submitEmergencyPrayer(fullName: string, emailAddress: string, prayerRequest: string): Promise<bigint>;
    submitPrayerRequest(fullName: string, emailAddress: string, phoneNumber: string | null, prayerRequest: string, urgencyLevel: UrgencyLevel): Promise<bigint>;
    updatePrayerRequestStatus(id: bigint, newStatus: RequestStatus): Promise<void>;
}
