const express = require("express");
const db = require("./helper/connection");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// try {
//     db.query("SELECT * FROM products", (err, result) => {
//       if (err) console.log("ada error");
//       return res.send(result.rows);
//     });
//   } catch (error) {}
app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM products")
    .then((result) => res.send(result.rows))
    .catch((err) => res.send(err));
});
app.post("/api/products", (req, res) => {
  const request = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
  };
  db.query(
    "INSERT INTO products(name,price,category,image) VALUES ($1,$2,$3,$4)",
    [request.name, request.price, request.category, request.image]
  )
    .then((result) => res.status(201).send(result.rows))
    .catch((err) => res.status(400).send(err.message));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
