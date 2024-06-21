/**
 * Registration data required for registering a new user.
 * @typedef {Object} RegistrationData
 * @property {string} username - The username of the new user.
 * @property {string} password - The password of the new user.
 * @property {string} [token] - Optional token for additional verification.
 */
export interface RegistrationData {
	username: string;
	password: string | "";
	token?: string;
}

/**
 * Suspension details of a user.
 * @typedef {Object} Suspended
 * @property {string} reason - The reason for suspension.
 * @property {string} duration - The duration of the suspension.
 * @property {string} suspender - The entity that suspended the user.
 */
export interface Suspended {
	reason: string;
	duration: string;
	suspender: string;
}

/**
 * Login data required for logging in a user.
 * @typedef {Object} LoginData
 * @property {string} username - The username of the user.
 * @property {string} password - The password of the user.
 * @property {string} [token] - Optional token for additional verification.
 */
export interface LoginData {
	username: string;
	password: string;
	token?: string;
}

/**
 * User data stored in the database.
 * @typedef {Object} UserData
 * @property {string} [id] - The unique identifier of the user.
 * @property {string} username - The username of the user.
 * @property {string} hashedPassword - The hashed password of the user.
 * @property {string} walletAddress - The wallet address of the user.
 * @property {("tails"|"google")} accountType - The type of account.
 * @property {number} [createdAt] - The timestamp when the account was created.
 * @property {Suspended} [suspended] - Suspension details if the user is suspended.
 */
export interface UserData {
	id?: string;
	username: string;
	hashedPassword: string;
	walletAddress: string;
	accountType: "tails" | "google";
	createdAt?: number;
	suspended?: Suspended;
}

/**
 * Safe user data that can be shared without exposing sensitive information.
 * @typedef {Object} SafeUserData
 * @property {string} username - The username of the user.
 * @property {string} walletAddress - The wallet address of the user.
 * @property {("tails"|"google")} accountType - The type of account.
 * @property {number} [createdAt] - The timestamp when the account was created.
 * @property {Suspended} [suspended] - Suspension details if the user is suspended.
 */
export interface SafeUserData {
	username: string;
	walletAddress: string;
	accountType: "tails" | "google";
	createdAt?: number;
	suspended?: Suspended;
}
