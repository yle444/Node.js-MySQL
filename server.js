const express = require('express');
const mysql = require('mysql');
const app = express();

// Middleware per il parsing dei dati del form
app.use(express.urlencoded({ extended: true }));

// Configurazione della connessione a MySQL
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',  // Sostituisci con la tua password MySQL
    database: 'nome_database'  // Sostituisci con il nome del tuo database
});

// Connessione a MySQL
conn.connect((err) => {
    if (err) throw err;
    console.log('Connesso al database MySQL!');
});

// Rotta POST per ricevere i dati dal form
app.post('/addUtente', (req, res) => {
    const { nome, email } = req.body; 
    const sql = 'INSERT INTO utenti (nome, email) VALUES (?, ?)';

    conn.query(sql, [nome, email], (err, result) => {
        if (err) throw err; // gestisce errori
        res.send('Utente aggiunto con successo!'); // conferma inserimento
    });
});

// Avvio del server
app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000');
});
