const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const ProductController = require("./controllers/ProductController");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/api/products", ProductController.getProducts);
app.get("/api/products/:id", ProductController.getProduct);
app.post("/api/products", ProductController.addProduct);
app.put("/api/products/:id", ProductController.updateProduct);
app.delete("/api/products/:id", ProductController.deleteProduct);

app.listen(5000, () => {
  console.log("server started on http://localhost:5000");
});
