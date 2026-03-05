const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:5500'
}));

app.use(express.json());

const data = [
    { id: 1, name: 'Alice', email: 'alice@example.com', age: 30 },
    { id: 2, name: 'Bob', email: 'bob@example.com', age: 25 },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 }
];

app.get('/api/data', (req, res) => {
    console.log('Requête reçue pour /api/data');
    res.json(data);
});

app.post('/api/data', (req, res) => {
    const newItem = req.body;
    if (newItem && newItem.name && newItem.email && newItem.age) {
        newItem.id = data.length + 1;
        data.push(newItem);
        res.status(201).json(newItem);
    } else {
        res.status(400).json({ error: 'Données invalides' });
    }
});

module.exports = app;