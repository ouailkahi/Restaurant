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

-- Table du menu
CREATE TABLE IF NOT EXISTS menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    repas_id INT,
    FOREIGN KEY (repas_id) REFERENCES repas(id),
    position INT NOT NULL,
    disponible BOOLEAN NOT NULL
);
-- Ajout de la table reservation
CREATE TABLE IF NOT EXISTS reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_client VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    nbr_personnes INT NOT NULL,
    date_reservation DATE NOT NULL,
    heure_debut TIME NOT NULL,
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

INSERT INTO repas (nom, prix, description, photo, type) 
VALUES 
    ('Spaghetti Bolognaise', 12.99, 'Délicieuses pâtes avec une sauce bolognaise maison.', './assets/images/menu-1.png', 'breakfast'),
    ('Salade César', 8.49, 'Salade fraîche avec poulet grillé, parmesan et vinaigrette césar.', './assets/images/menu-2.png', 'appetizers'),
    ('Burger Classique', 9.99, 'Burger juteux avec fromage, laitue, tomate et oignon.', './assets/images/menu-3.png', 'drinks'),
    ('Pizza Pepperoni', 11.50, 'Pizza garnie de pepperoni, fromage fondu et sauce tomate.', './assets/images/menu-4.png', 'breakfast'),
    ('Sushi Assorti', 14.99, 'Assortiment de sushis frais et savoureux.', './assets/images/menu-5.png', 'appetizers'),
    ('Salade de Fruits Frais', 6.99, 'Mélange rafraîchissant de fruits de saison.', './assets/images/menu-6.png', 'drinks');





