const items = [
  { id: 01, name: "product1" },
  { id: 02, name: "product2" },
  { id: 03, name: "product2" },
];

const index = (req, res) => {
  res.render("index", {
    title: "Home",
  });
};

const products = (req, res) => {
  res.render("products", {
    title: "list of products",
    items: items,
  });
};

const newProduct = (req, res) => {
  const { newItem } = req.body;
  items.push({
    id: items.length + 1,
    name: newItem,
  });
  res.redirect("/products");
};

const id = (req, res) => {
  res.send(`<h1>Poduct ${req.params.id}</h1> `);
};

module.exports = {
  index,
  products,
  newProduct,
  id,
};
