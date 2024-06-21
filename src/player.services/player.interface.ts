

export interface PlayerStats {
    username: string;
    playerLevel: PlayerLevel;
    playerStatPoints: PlayerStatPoints
}


export interface PlayerLevel {
    level: number;
    experienceRequired: number;
    currentExperience: number;
}

export interface PlayerStatPoints {
    strength: number;
    perception: number;
    endurance: number;
    charisma: number;
    intelligence: number;
    agility: number;
    luck: number;
}