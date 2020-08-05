const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/health', (req, res) => {
  res.status(200).send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
