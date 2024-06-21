import type { PlayerCurrency, PlayerLevel, PlayerStatPoints } from "./player.interface";

/**
 * Default player level object.
 * @type {PlayerLevel}
 */
export const playerLevel: PlayerLevel = { 
    level: 1,
    currentExperience: 0,
    experienceRequired: 0
};

/**
 * Default player stat points object.
 * @type {PlayerStatPoints}
 */
export const playerStatPoints: PlayerStatPoints = {
    strength: 1,
    perception: 1,
    endurance: 1,
    charisma: 1,
    intelligence: 1,
    agility: 1,
    luck: 1
};

/**
 * Default player owned currency object.
 * @type {playerCurrency}
 */
export const playerCurrency: PlayerCurrency = {
    gold: 0,
    gem: 0,
    catnip: 0

}
