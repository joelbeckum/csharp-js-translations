const names = [
   "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("All Place Names");

for (const name of names) {
  console.log(name);
}

const theNames = names.filter(name => name.startsWith("The"));

console.log("\n'The' Place Names\n");
for (const name of theNames) {
  console.log(name);
}