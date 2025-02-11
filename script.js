/*
Part 1: Object-based Approach
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};

Test the roll method

adventurer.roll();
adventurer.roll();
*/

// Part 2: Class-based Approach
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }

    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} takes ${damage} damage! Health is now ${this.health}.`);

        // Check if the character is defeated
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated!`);
        }
    }
}

/*
Creating Characters

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];

robin.companion = new Character("Leo");
robin.companion.type = "Cat";

robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
robin.roll();
*/

//Adventurer class that extends Character
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }

    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name}!`);
        const attackRoll = this.roll();

        if (attackRoll > 10) { // A simple rule: roll must be greater than 10 to hit
            const damage = Math.floor(Math.random() * 10) + 1; 
        }
    }
}
// Complete class that extends Character
class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
}

class Enemy extends Character {
    constructor(name, level) {
        super(name);
        this.level = level;
        this.health = 50 + level * 10; // Higher level enemies have more health
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name}!`);
        const attackRoll = Math.floor(Math.random() * 20) + 1; 
    
        if (attackRoll > 10) { 
            const damage = Math.floor(Math.random() * 10) + 1; 
            console.log(`${this.name} hits ${target.name} for ${damage} damage!`);
            target.takeDamage(damage);
        } else {
            console.log(`${this.name} misses the attack!`);
        }
    }     
}

// Creating an Adventurer
const robin = new Adventurer("Robin", "Warrior");
robin.inventory.push("sword", "potion", "artifact");



// Creating companions
robin.companion = new Companion("Leo", "Cat");
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Creating an enemy
const goblin = new Enemy("Goblin", 2); // Level 2 goblin


// Testing Methods
console.log(robin);
robin.roll();
robin.scout();
robin.companion.roll();
robin.companion.companion.roll();
robin.attack(goblin);
goblin.attack(robin);
