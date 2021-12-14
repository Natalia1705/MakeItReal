const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");

router.get("/", indexController.index);
router.get("/products", indexController.products);
router.get("/products/:id", indexController.id);
router.post("/newproduct", indexController.newProduct);

module.exports = router;
