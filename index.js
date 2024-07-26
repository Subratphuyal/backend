const db = require('./db');
const express = require('express');
const app = express();
const port = 8000;





app.get('/', (req, res) => {
  db.query('SELECT * FROM react1', (err, results) => {
    if (err) {
      res.status(500).send(err.toString());
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
