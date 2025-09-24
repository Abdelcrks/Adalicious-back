import express from "express";
// import menu from "./data/menu.json"  with { type: "json" }
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config()
import { Pool } from 'pg';

const app = express();

app.use(cors({ origin: "http://127.0.0.1:5500" }));
app.use(express.json())




app.get("/", (req, res) => {
    res.send("Accueil");
});

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        require: true,
      },
});


app.get("/menus", async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM menus")
        res.json(response.rows)
    } catch (error) {
        console.log("erreur", error)
    }
    
})

// app.get("/menu", (req, res) => {
//     res.json(menu);
// });

app.get("/menu/:id", (req, res) => {
    const id = Number(req.params.id);
    const plat = menu.find(p => p.id === id);
    if (!plat) return res.status(404).json({ error: `Plat id=${id} non trouvé` });
    res.json(plat);
});


app.post("/orders", (req, res) => {
    console.log("[POST /orders] body reçu:", req.body);
    const { id, plate, clientName } = req.body;
    if (!id || !plate || !clientName) {
        return res.status(400).json({ error: "Champs manquants ou invalides" });
    }
    console.log(`[COMMANDE REÇUE] id=${id} | plat="${plate}" | client="${clientName}"`);
    return res.status(201).json({ ok: true, message: `Commande reçue ${plate} pour ${clientName}` });
});


// app.get("/orders", (req,res) =>{
//     res.json(orders);
// })

app.listen(3000, () => { console.log("Serveur lancé sur http://localhost:3000"); });

