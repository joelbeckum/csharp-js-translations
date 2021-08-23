const dieString = value => {
    let dieString = "Unknown";

    switch(value) {
        case 1:
            dieString = "one";
            break;
        
        case 2:
             dieString = "two";
            break;

        case 3:
            dieString = "three";
            break;
            
        case 4:
            dieString = "four";
            break;

        case 5:
            dieString = "five";
            break;
        
        case 6:
            dieString = "six";
            break;

    }
    
    return dieString;    
}

const createDie = dieValue => {
    const die = {
        value: dieValue,
        valueString: dieString(dieValue)
    }

    return die;
}

const roll = () => {
    const dieValue = Math.ceil(Math.random() * 6);
    const die = createDie(dieValue);
    return die;
}

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

for (let i = 0; i < 10; i++) {
    die1 = roll();
    die2 = roll();

    let message = `${die1.valueString} + ${die2.valueString} == ${die1.value + die2.value}`;
    if (die1.value === die2.value) {
        message += " DOUBLES!";
    }

    console.log(message)
}