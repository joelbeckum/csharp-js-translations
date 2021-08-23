const makeSpell = (name, isEvil, energyRequired) => {
    const spell = {
        name: name,
        isEvil: isEvil,
        energyRequired: energyRequired
    }

    return spell;
}

const makeSpellBook = (title, spells) => {
    const spellBook = {
        title: title,
        spells: spells
    }

    return spellBook;
} 

const getAllSpells = () => {
    const allSpells = [
        makeSpell(
            "Turn enemy into a newt",
            true,
            5.1
        ),
        makeSpell(
            "Conjure some gold for a local charity",
            false,
            2.99
        ),
        makeSpell(
            "Give a deaf person the ability to hear",
            false,
            12.2
        ),
        makeSpell(
            "Convince your relatives your political views are correct",
            false,
            2921.5
        ),
        makeSpell(
            "Make yourself emperor of the universe",
            true,
            100.0
        )
    ];

    return allSpells;
}

const displaySpellBook = book => {
    console.log(book.title);
    for (const spell of book.spells) {
        console.log(`   ${spell.name}`)
    }
}




console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = getAllSpells();
const goodBook = makeSpellBook(
    "Good Book",
    allSpells.filter(spell => !spell.isEvil)
);
const evilBook = makeSpellBook(
    "Evil Book",
    allSpells.filter(spell => spell.isEvil)
);

displaySpellBook(goodBook);
console.log("");
displaySpellBook(evilBook);