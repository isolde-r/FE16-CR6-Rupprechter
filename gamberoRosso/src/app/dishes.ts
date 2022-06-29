export class Dish {
    name: string;
    image: string;
    description: string;
    price: number;
    availability: boolean;
    allergyInfo: string[];
    ingredients: string[];
    constructor(name: string, image: string, description: string, price: number, availability: boolean, allergyInfo: string[], ingredients: string[]) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.availability = availability;
        this.allergyInfo = allergyInfo;
        this.ingredients = ingredients;
        dishes.push(this);
    }
}

export const dishes: Dish[] = []

let vitello = new Dish("Vitello Tonnato", "./assets/img/vitello.jpg", "An all time classic of italian cuisine, seasoned with a spruce of lemon and sicilian capers", 14.99, true, ["meat", "fish"], ["veal", "capers", "anchovies", "tuna", "eggs"]);
let branzino = new Dish("Branzino ripieno", "./assets/img/branzino.jpg", "Grilled branzino, stuffed with tomatoes and onion", 18.99, false, ["vegeterian", "fish"], ["sea bass", "tomatoes", "onion"]);
let spaghetti = new Dish("Spaghetti mollicati", "./assets/img/spaghetti.jpg", "A dish of farmers tradition taken to the highest level of cuisine. You don't know what a bunch of simple bread crumb can add to the taste, until you tried this. ", 10.99, true, ["gluten", "vegeterian"], ["spaghetti", "bread crumbs", "anchovies"]);
let carciofi = new Dish("Carciofi alla griglia", "./assets/img/carciofi.jpg", "Sometimes less is more: apulian artichokes seasoned with lemon, mediterranean herbs and lots of garlic. Take the charcoal grill for granted.", 16.99, false, ["vegeterian"], ["artichokes", "lemon", "garlic"]);
let pannaCotta = new Dish("Panna Cotta", "./assets/img/panna_cotta.jpg", "Maybe the most famous of all italian desserts, beyond tiramisú. At Gambero Rosso you'll get the tricolore version of it. Meaning everytime with red fruits, according to the season.", 7.99, true, ["lactose"], ["cream", "vanilla bean", "gelatin"]);
let polenta = new Dish("Polenta con ragú", "./assets/img/polenta.jpg", "We take it easy beeing \"polentoni\". To be honest, this typical north-italian dish is a culinary delight.", 12.99, true, ["meat"], ["polenta", "pancetta bacon", "beef", "tomatoes"]);

