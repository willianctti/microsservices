const express = require('express');
const app = express();
app.use(express.json());

const clientes = [{ id: 1, nome: 'Willian Nicoletti' }];

app.get('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id == req.params.id);
  if (!cliente) return res.status(404).send('Cliente não encontrado');
  res.json(cliente);
});

app.listen(3001, () => console.log('Cliente Service rodando na porta 3001'));
