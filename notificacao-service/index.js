const express = require('express');
const app = express();
app.use(express.json());

app.post('/notificar', (req, res) => {
  const { mensagem } = req.body;
  console.log('Notificação enviada:', mensagem);
  res.send('Notificado!');
});

app.listen(3004, () => console.log('Notificação Service rodando na porta 3004'));
