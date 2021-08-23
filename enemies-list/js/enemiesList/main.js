const createEnemy = (firstName, lastName, offenses, isReallyHated) => {
    return {
        firstName: firstName,
        lastName: lastName,
        offenses: offenses,
        isReallyHated: isReallyHated
    }
}

const getEnemies = () => {
    const enemies = [createEnemy(
        "Joshua",
        "Flowers",
        [
            "Being a jerk to me in elementary school",
            "Not being nice to me in elementary school"
        ],
        true
    ),
        createEnemy(
            "Darth",
            "Vader",
            [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices"
            ],
            false
        ),
        createEnemy(
            "Betty",
            "Rudelady",
            [
                "Phone calls in the theater",
                "Phone calls on the bus",
                "Phone calls in line at the grocery store",
                "Poor conversationalist"
            ],
            true
        ),
        createEnemy(
            "Leon",
            "Peck",
            [
                "Keeps giving me a hotplate"
            ],
            false
        )]
    
    return enemies;
}

console.log("My Enemies List!");
console.log("----------------");

const enemies = getEnemies();

for (const enemy of enemies) {
    if (enemy.isReallyHated) {
        console.log(`${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`);
    } else {
        console.log(`${enemy.firstName} ${enemy.lastName}`);
    }
}