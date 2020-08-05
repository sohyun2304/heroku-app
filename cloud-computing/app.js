const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {

  var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
  console.log(ip);
  res.send('Hello, World! : ' + ip + "," + new Date());
  
});

app.get('/health', (req, res) => {
  res.status(200).send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
