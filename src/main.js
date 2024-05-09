const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const getUserData = () => {
  return [
    { name: 'John Doe', age: 25 },
    { name: 'Jane Doe', age: 22 }
  ];
};

const dataT = {
  name: 'John Doe',
  age: 25,
  data: {
    name: 'Jane Doe-----',
    age: 22
  }
};

app.post('/get-users', express.json(), (req, res) => {
  const { id } = req.body;
  res.send(`Parámetro 1: ${id}, Parámetro 2: ${id}`);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
