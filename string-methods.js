/* Opdracht 0: voorbeeld */
// Check de lengte van onderstaande string en log dit in de terminal
// ---- Verwachte uitkomst: 10

const word = "zoetsappig";
console.log(word.length);


/* Opdracht 1 */
//  Check of het woord "Banaan" langer is dan het woord "Aardappel" en log dit in de terminal.
// ---- Verwachte uitkomst: false

const fruit = "Banaan";
const vegetable = "Aardappel";

const fruitLongerVegetable = fruit.length > vegetable.length;
console.log("Verwachte uitkomst: false => " + fruitLongerVegetable);

/* Opdracht 2 */
//  Zorg ervoor dat de laatste letter van het woord in fruit en vegetable (hierboven) in de terminal gelogd wordt.
//  Tip: bedenk 1 manier die voor beide woorden zou werken.
// ---- Verwachte uitkomst voor fruit: "n"
// ---- Verwachte uitkomst voor vegetable: "l"

let fruitLength = fruit.length;
let vegetableLength = vegetable.length;
console.log("Verwachte uitkomst voor fruit: \"n\" => " + fruit[fruitLength - 1]);
console.log("Verwachte uitkomst voor vegetable: \"l\" = > " + vegetable[vegetableLength - 1]);


/* Opdracht 3 */
//  Haal de spaties aan het begin en eind van onderstaande zin weg en log dit in de terminal
// ---- Verwachte uitkomst: "De kat krabt de krullen van de trap"

const userInput = "  De kat krabt de krullen van de trap ";
console.log("Verwachte uitkomst: \"De kat krabt de krullen van de trap\" => " + userInput.trim());


/* Opdracht 4 */
// Check of het woord "Fantastisch" in onderstaande zin voorkomt en log dit in de terminal.
// ---- Verwachte uitkomst: true

const story = "We vinden de behaalde resultaten werkelijk prachtig. Fantastisch, nietwaar?"
console.log("Verwachte uitkomst: true => " + story.includes("Fantastisch", 0));


/* Opdracht 5 */
// Knip de vraag van bovenstaande tekst (story) af, zodat alleen het eerste gedeelte overblijft en log dit in de terminal.
// ---- Verwachte uitkomst: "We vinden de behaalde resultaten werkelijk prachtig."

let slicePoint = story.indexOf(".");
console.log("Verwachte uitkomst: \"We vinden de behaalde resultaten werkelijk prachtig.\" => " + story.slice(0, slicePoint));

/* Opdracht 6 */
// Maak van onderstaand bedrag een Nederlands bedrag door het volgende te doen:
// * Vervang het dollar-teken voor een euro-teken
// * Vervang de punt voor een komma
// Log dit in de terminal.
// ---- Verwachte uitkomst: "€35,59"

const price = "$35.59";

let euroPrice = price.replace("$", "€");
let euroDotPrice = euroPrice.replace(",", ".");
console.log("erwachte uitkomst: \"€35,59\" => " + euroDotPrice);





