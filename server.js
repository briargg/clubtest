const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Datos simulados (en una base de datos real)
const users = [];
const consumption = {}; // { userId: totalConsumption }
const tokens = {}; // { userId: totalTokens }

app.use(bodyParser.json());

// Registrar usuario
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    // Aquí deberías almacenar el usuario en una base de datos
    users.push({ username, email, password });
    res.json({ message: 'Usuario registrado exitosamente.' });
});

// Obtener consumo del usuario
app.get('/consumption/:userId', (req, res) => {
    const { userId } = req.params;
    res.json({ consumption: consumption[userId] || 0 });
});

// Obtener tokens del usuario
app.get('/tokens/:userId', (req, res) => {
    const { userId } = req.params;
    res.json({ tokens: tokens[userId] || 0 });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
