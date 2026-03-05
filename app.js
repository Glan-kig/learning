const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
    next();
});

app.use(express.json());

const data = [
    { id: 1, name: 'Alice', email: 'alice@example.com', age: 30 },
    { id: 2, name: 'Bob', email: 'bob@example.com', age: 25 },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 }
];

app.get('/api/data', (req, res, next) => {
    console.log('Requête reçue pour /api/data');
    res.json(data);
    next();
});

app.post('/api/data', (req, res, next) => {
    const newItem = req.body;
    if (newItem && newItem.name && newItem.email && newItem.age) {
        newItem.id = data.length + 1;
        data.push(newItem);
        res.status(201).json(newItem);
    } else {
        res.status(400).json({ error: 'Données invalides' });
    }
    next();
});

module.exports = app;