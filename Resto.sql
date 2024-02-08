-- Création de la base de données
drop database if exists restaurant_database;
CREATE DATABASE IF NOT EXISTS restaurant_database collate utf8_general_ci;

-- Utilisation de la base de données
USE restaurant_database;

-- Table des repas
CREATE TABLE IF NOT EXISTS repas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prix DECIMAL(10, 2) NOT NULL,
    description TEXT,
    photo varchar(250),
    type VARCHAR(50) NOT NULL
);


INSERT INTO repas (nom, prix, description, photo, type) VALUES
('Salade César', 12.50, 'Laitue romaine, croûtons, parmesan, vinaigrette César', 'salade-cesar.jpg', 'Salade'),
('Pizza Margherita', 15.99, 'Tomates, mozzarella, basilic', 'pizza-margherita.jpg', 'Pizza'),
('Pâtes Carbonara', 14.75, 'Pâtes, pancetta, œuf, crème, fromage', 'pates-carbonara.jpg', 'Pâtes'),
('Burger Bacon', 13.99, 'Steak haché, bacon, cheddar, laitue, tomate, oignon', 'burger-bacon.jpg', 'Burger'),
('Sushi Assorti', 22.50, 'Assortiment de sushis et sashimis', 'sushi-assorti.jpg', 'Sushi'),
('Steak Frites', 19.99, 'Steak grillé, frites maison, sauce au poivre', 'steak-frites.jpg', 'Plat principal'),
('Tacos au Poulet', 10.50, 'Tortilla, poulet grillé, salsa, guacamole', 'tacos-poulet.jpg', 'Tacos'),
('Soupe à l\'oignon', 8.99, 'Bouillon de bœuf, oignons caramélisés, fromage, croûtons', 'soupe-oignon.jpg', 'Soupe'),
('Salade Niçoise', 11.75, 'Thon, haricots verts, tomates, œufs, olives, vinaigrette', 'salade-nicoise.jpg', 'Salade'),
('Gâteau au Chocolat', 6.50, 'Gâteau au chocolat fondant, glace à la vanille', 'gateau-chocolat.jpg', 'Dessert');



-- Ajout de la table reservation
CREATE TABLE IF NOT EXISTS reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_client VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    nbr_personnes INT NOT NULL,
    date_reservation DATE NOT NULL,
    heure_debut TIME NOT NULL,
    heure_fin TIME NOT NULL,
    message TEXT
);
-- Ajout de la table contact
CREATE TABLE IF NOT EXISTS contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    phone VARCHAR(15) NOT NULL,
    location VARCHAR(255) NOT NULL,
    lunch_time_start TIME NOT NULL,
    lunch_time_end TIME NOT NULL,
    dinner_time_start TIME NOT NULL,
    dinner_time_end TIME NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- Ajout de la table notification
CREATE TABLE IF NOT EXISTS notification (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    UNIQUE KEY unique_email (email)
);

INSERT INTO contact (phone, location, lunch_time_start, lunch_time_end, dinner_time_start, dinner_time_end, email)
VALUES ('+212-688445879', 'Delicious City', '12:00:00', '14:30:00', '17:00:00', '22:00:00', 'booking@restaurant.com');





