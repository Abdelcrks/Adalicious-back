import express from "express";
import menu from "./data/menu.json"  with { type: "json" }
import cors from "cors"
const app = express();

app.use(cors({ origin: "http://127.0.0.1:5500"}));


app.get("/", (req, res) => {  
res.send("Accueil");
});

app.get("/menu", (req, res) => {    
res.json(menu);
});

app.listen(3000, () => {  console.log("Serveur lancé sur http://localhost:3000");});

