import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
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
    getAllRequests(): Promise<Array<AppointmentRequest>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitAppointmentRequest(request: AppointmentRequest): Promise<void>;
}
