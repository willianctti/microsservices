const express = require('express');
const app = express();
app.use(express.json());

const entregadores = [];

app.post('/entregadores', (req, res) => {
  const entregador = { id: entregadores.length + 1, nome: req.body.nome };
  entregadores.push(entregador);
  res.status(201).json(entregador);
});

app.listen(3003, () => console.log('Entregador Service rodando na porta 3003'));
