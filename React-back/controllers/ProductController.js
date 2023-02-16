const uniqid = require("uniqid");
class Product {
  static products = [];

  static addProduct(req, res) {
    req.body.id = uniqid();
    Product.products.push(req.body);
    return res.send({ success: "OK", product: req.body });
  }

  static getProducts(req, res) {
    res.send({ items: Product.products });
  }

  static getProduct(req, res) {
    let id = req.params.id;
    let product = Product.products.find((a) => a.id == id);
    res.send({ product });
  }

  static deleteProduct(req, res) {
    const id = req.params.id;
    Product.products.splice(
      Product.products.findIndex((a) => a.id == id),
      1
    );
    res.send({ success: "OK" });
  }

  static updateProduct(req, res) {
    const id = req.params.id;
    const product = req.body;

    let current = Product.products.findIndex((a) => a.id == id);
    Product.products[current] = product;

    return res.send({ success: "OK" });
  }
}
module.exports = Product;
