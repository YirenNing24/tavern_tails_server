/**
 * Interface for player stats.
 */
export interface PlayerStats {
    username: string;
    playerLevel: PlayerLevel;
    playerStatPoints: PlayerStatPoints;
    playerCurrency: PlayerCurrency;
}

/**
 * Interface for player level.
 */
export interface PlayerLevel {
    level: number;
    experienceRequired: number;
    currentExperience: number;
}

/**
 * Interface for player stat points.
 */
export interface PlayerStatPoints {
    strength: number;
    perception: number;
    endurance: number;
    charisma: number;
    intelligence: number;
    agility: number;
    luck: number;
}

/**
 * Interface for player currency.
 */
export interface PlayerCurrency {
    gold: number;
    gem: number;
    catnip: number;
}
