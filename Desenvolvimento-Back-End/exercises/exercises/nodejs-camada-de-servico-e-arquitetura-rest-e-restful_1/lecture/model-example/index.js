const express = require('express');
const Author = require('./model/Author');

const app = express();
const port = 3000;

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
});
app.listen(port, () => console.log('Example app listening on port port!'));