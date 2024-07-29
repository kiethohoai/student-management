const express = require('express');
const router = require('./routes/root.router');
const app = express();
const port = 5173;

// Allow req, res => json
app.use(express.json());

// config router
app.use(router);

// todo Homepage
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(port, () => {});
