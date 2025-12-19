const express = require('express');
const cors = require('cors');
const app = express(); app.use(cors()); app.use(express.json());

app.post('/calculate-bill', (req, res) => {
  const { units } = req.body;
  const amount = units * 7.2;
  const tax = amount * 0.18;
  const total = amount + tax;
  const tip = units > 200 ? 'Switch to LED bulbs! 💡 Save ₹200/month' : 'Good usage! Keep it up!';
  
  res.json({ total: total.toFixed(0), tax: tax.toFixed(0), tip, savings: units > 200 ? 200 : 0 });
});

app.listen(3000, () => console.log('⚡ Bill calculator ready'));
