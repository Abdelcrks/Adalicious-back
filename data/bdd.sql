
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  firstname text not null,
  created_at TIMESTAMPTZ DEFAULT now()
)

create table menus (
  menu_id SERIAL PRIMARY KEY,
  plate TEXT not NULL,
  description text not null,
  image text not null
)


create table orders_items (
  order_item_id SERIAL PRIMARY KEY,
  menu_id INTEGER not null REFERENCES menus(menu_id) on delete CASCADE,
  quantity BIGINT not null 
)

create table orders (
  orders_id SERIAL PRIMARY KEY,
  user_id INTEGER not NULL REFERENCES users(user_id) on DELETE CASCADE,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  status text not null DEFAULT 'preparation' check (status in ('preparation' ,'pret', 'annule'))
)

insert into menus (plate, description, image)
VALUES
  (
    'Hello World Burger',
    'Un cheeseburger classique (pain, steak, fromage, salade, sauce)',
    '🍔'),

( '404 Not Found Fries',
   'Des frites maison avec une sauce mystère (choisie aléatoirement par le backend !)',
   '🍟'),
  
( 'JSON Nuggets',
  'Nuggets de poulet avec 3 sauces au choix (ketchup, mayo, barbecue)',
  '🍗'),
  
  ('Git Pull Tacos',
    'Un taco simple avec poulet, salade, fromage et sauce.',
    '🌮'),

  ( 'Front-end Salad',
    'Une salade légère avec tomates, feta et vinaigrette maison.',
    '🥗'),
  
  ('Back-End Brownie',
    'Un brownie moelleux au chocolat',
    '🍫'),
  
  ('Full Stack Menu',
    'Un combo burger, frites et boisson.',
    '🥗')

    