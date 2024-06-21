export interface RegistrationData {
    username: string;
    password: string;
    walletAddress: string;
    accountType: "tails" | "google";
    createdAt?: number
    suspended?: Suspended
}

export interface Suspended {
    reason: string;
    duration: string;
    suspender: string;
}