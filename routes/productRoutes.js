import express from "express";
import { addProductController, deleteProductController, getProducts, updateProductController } from "../controllers/productController.js";
const productRouter = express.Router();

productRouter.post("/create-product", addProductController);
productRouter.get("/get-all", getProducts);
productRouter.put("/update-product/:id", updateProductController)
productRouter.delete("/delete-product/:id", deleteProductController)

export default productRouter;