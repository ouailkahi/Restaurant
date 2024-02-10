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
    ('Msemen', 5.99, 'Délicieux msemen marocain croustillant et feuilleté.', '../assets/images/menu-1.png', 'breakfasts'),
    ('Baghrir', 4.49, 'Crêpes mille trous servies avec du miel et du beurre.', '../assets/images/menu-2.png', 'breakfasts'),
    ('Harcha', 6.99, 'Pain de semoule grillé servi avec du miel ou de la confiture.', '../assets/images/menu-3.png', 'breakfasts'),
    ('Briouates aux Amandes', 7.50, 'Petits triangles feuilletés fourrés aux amandes et parfumés à la fleur d oranger.', '../assets/images/menu-4.png', 'breakfasts'),
    
    ('Jus d Orange Frais', 3.99, 'Jus d orange pressé frais.', '../assets/images/menu-5.png', 'drinks'),
    ('Thé à la Menthe', 3.49, 'Thé vert à la menthe fraîche, sucré selon la tradition marocaine.', '../assets/images/menu-6.png', 'drinks'),
    ('Café Marocain', 4.99, 'Café noir fort avec une touche de cardamome.', '../assets/images/menu-1.png', 'drinks'),
    ('Limonade à la Menthe', 4.50, 'Limonade fraîche infusée à la menthe.', '../assets/images/menu-2.png', 'drinks'),
    
    ('Brochettes de Kefta', 9.99, 'Brochettes de viande hachée épicée grillée.', '../assets/images/menu-3.png', 'appetizers'),
    ('Zaalouk', 6.49, 'Salade d aubergines grillées épicées et tomates.', '../assets/images/menu-4.png', 'appetizers'),
    ('Brick au Thon', 8.99, 'Feuilleté croustillant fourré au thon et aux œufs.', '../assets/images/menu-5.png', 'appetizers'),
    ('Batbout', 5.50, 'Petits pains moelleux cuits à la vapeur.', '../assets/images/menu-6.png', 'appetizers');



select * from repas;


