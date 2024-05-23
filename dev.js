const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

app.use((req, res) => {
    res.status(404).send('Rota não encontrada');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
