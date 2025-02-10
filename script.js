const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "portion", "artifact"],
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

// Test the roll method
adventurer.roll();
adventurer.roll();
