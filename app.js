const express = require('express');
const app = express();
const port = 5173;

// config routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/students', (req, res) => {
  res.send('Student List');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
