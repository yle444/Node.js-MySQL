// Importa il modulo MySQL
const mysql = require('mysql2');

// Configura la connessione al database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',  // Sostituisci con la tua password MySQL
    database: 'nome_database'  // Sostituisci con il nome del tuo database
});

// Connessione a MySQL
conn.connect((err) => {
    if (err) {
        console.error('Errore di connessione:', err);
        return;
    }
    console.log('Connesso al database MySQL!');
});

// Esecuzione della query SELECT
conn.query('SELECT * FROM utenti', (err, results) => {
    if (err) throw err; // gestisce eventuali errori

    console.log("Risultati della query:", results); // stampa i risultati (array di oggetti)


    // Iterazione sui risultati con forEach
    results.forEach(record => {
        console.log(`Nome: ${record.nome}, Email: ${record.email}`);
    });

    // Utilizzo di map per ottenere solo i nomi degli utenti
    const nomi = results.map(record => record.nome);
    console.log("Lista dei nomi:", nomi);
});

// Chiusura della connessione
conn.end((err) => {
    if (err) throw err;
    console.log('Connessione al database MySQL chiusa.');
});
