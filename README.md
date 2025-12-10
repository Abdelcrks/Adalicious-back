🍽️ Adalicious – Backend API

API REST complète permettant la gestion d’un restaurant digital : menus, plats, commandes et utilisateurs.
Développée avec Node.js, Express, PostgreSQL et Drizzle ORM.

🧾 Description

Le backend Adalicious fournit une API fiable et structurée pour gérer un système de restauration :

Création et gestion de restaurants

Affichage dynamique des menus

CRUD complet des plats

Gestion des commandes

Connexion à une base de données PostgreSQL (Neon) via Drizzle ORM

Architecture MVC organisée et scalable

Ce backend sert la partie front de l’application Adalicious.

✨ Fonctionnalités principales
🧑‍🍳 Gestion des restaurants

Créer un restaurant

Récupérer la liste des restaurants

Modifier un restaurant

Supprimer un restaurant

🥗 Gestion des menus

Associer un menu à un restaurant

CRUD complet des menus

Lien automatique avec les plats

🍝 Gestion des plats

Ajout d’un plat

Catégorisation (entrée, plat, dessert, boisson…)

Prix, description, image

CRUD complet

🛒 Gestion des commandes

Créer une commande

Récupérer l’historique des commandes

Calcul du total

Statuts de commande (pending / validated / delivered)

🔐 Sécurité & bonnes pratiques

Validation des inputs

Gestion des erreurs centralisées

Structure MVC

Routes propres (Express Router)