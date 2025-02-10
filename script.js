const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "portion", "artifact"]
};
//console.log(adventurer);

for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(`Enchanted Item ${i + 1}: ${adventurer.inventory[i]}`);
}

