
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

const billRoutes = require('./routes/billRoutes');

// serve all static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// homepage – send public/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API routes
app.use('/bill', billRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`⚡ Bill calculator ready at http://localhost:${PORT}`);
});
