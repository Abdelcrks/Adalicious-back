import express from "express";
import menu from "./data/menu.json"  with { type: "json" }
const app = express();

app.get("/", (req, res) => {  
res.send("Accueil");
});

app.get("/menu", (req, res) => {    
// const data = { "plate": "Hello World Burger", "description": "Un cheeseburger classique (pain, steak, fromage, salade, sauce).","image": "🍔"  };     
res.json(menu);
});

app.listen(3000, () => {  console.log("Serveur lancé sur http://localhost:3000");});
