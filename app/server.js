const express = require('express');
const router = require('./routes/root.router');
const app = express();
const port = 5173;
app.use(router);

// todo Homepage
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.use(express.json());
app.listen(port, () => {});
