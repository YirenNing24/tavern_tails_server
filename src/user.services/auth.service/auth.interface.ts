export interface RegistrationData {
    username: string;
    password: string | "";
    token?: string
}

export interface Suspended {
    reason: string;
    duration: string;
    suspender: string;
}

export interface LoginData {
    userName: string;
    password: string;
    token?: string
}


export interface UserData {
    id?: string;
    username: string;
    hashedPassword: string;
    walletAddress: string;
    accountType: "tails" | "google";
    createdAt?: number
    suspended?: Suspended
}

export interface SafeUserData {
    username: string;
    walletAddress: string;
    accountType: "tails" | "google";
    createdAt?: number
    suspended?: Suspended
}