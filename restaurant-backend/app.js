const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Configure MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restaurant_database',
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données MySQL : ', err);
    } else {
        console.log('Connecté à la base de données MySQL');
    }
});

// Route pour récupérer tous les repas
app.get('/repas', (req, res) => {
    db.query('SELECT * FROM repas', (err, result) => {
        if (err) {
            console.error('Erreur lors de la récupération des repas : ', err);
            res.status(500).send('Erreur serveur');
        } else {
            res.status(200).json(result);
        }
    });
});
app.get('/contact', (req, res) => {
    db.query('SELECT * FROM contact', (err, result) => {
        if (err) {
            console.error('Erreur lors de la récupération des repas : ', err);
            res.status(500).send('Erreur serveur');
        } else {
            res.status(200).json(result);
        }
    });
});

// Vos autres routes Express vont ici

app.listen(port, () => {
    console.log(`Serveur Express écoutant sur le port ${port}`);
});
