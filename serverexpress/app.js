const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/add-products", (req, res) => {
  res.send(
    `<form action="/products" method="POST">
    <input type="text" name="Product"/><button type="submit">Enviar</button></form>`
  );
});

app.post("/products", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.listen(3001, () => {
  console.log("Serve on port 3001");
});
