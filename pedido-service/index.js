import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());

const pedidos = [];

app.post('/pedidos', async (req, res) => {
  const { clienteId, itens } = req.body;

  const clienteRes = await fetch(`http://cliente-service:3001/clientes/${clienteId}`);
  if (!clienteRes.ok) return res.status(400).send('Cliente inválido');

  const pedido = { id: pedidos.length + 1, clienteId, itens };
  pedidos.push(pedido);
  res.status(201).json(pedido);
});

app.listen(3002, () => console.log('Pedido Service rodando na porta 3002'));
