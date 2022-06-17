export class Dish{
    name: string;
    image: string;
    description: string;
    price: number;
    availability: boolean;
    allergyInfo: string[];
    constructor(name: string, image: string, description: string, price: number,availability: boolean, allergyInfo: string[]) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.availability = availability;
        this.allergyInfo = allergyInfo;
        dishes.push(this);
    }
}

export const dishes: Dish[] = []

let vitello = new Dish("Vitello Tonnato", "/assets/img/vitello.jpg", "An all time classic of italian cuisine, seasoned with a spruce of lemon and sicilian capers", 14.99, true,["meat", "fish"]);
let branzino = new Dish("Branzino ripieno", "/assets/img/branzino.jpg", "Grilled branzino, stuffed with tomatoes and onion", 18.99, false,["vegeterian", "fish"]);
let spaghetti = new Dish("Spaghetti mollicati", "/assets/img/spaghetti.jpg", "A dish of farmers tradition taken to the highest level of cuisine. You don't know what a bunch of simple bread crumb can add to the taste, until you tried this. ", 10.99, true, ["gluten", "vegeterian"]);
let carciofi = new Dish("Carciofi alla griglia", "/assets/img/carciofi.jpg", "Sometimes less is more: apulian artichokes seasoned with lemon, mediterranean herbs and lots of garlic. Take the charcoal grill for granted.", 16.99, false, ["vegeterian"]);
let pannaCotta = new Dish("Panna Cotta", "/assets/img/panna_cotta.jpg", "Maybe the most famous of all italian desserts, beyond tiramisú. At Gambero Rosso you'll get the tricolore version of it. Meaning everytime with red fruits, according to the season.", 7.99, true, ["lactose"]);
let polenta = new Dish("Polenta con ragú", "/assets/img/polenta.jpg", "We take it easy beeing \"polentoni\". To be honest, this typical north-italian dish is a culinary delight.", 12.99, true, ["meat"]);

