import express from "express";
import { AddProduct, DeleteProduct, UpdateProduct, GetAllProduct, AddProductCart, GetAllCartProducts } from "./BrainRoutes.js"

const Router = express.Router();

Router.get("/ProductGet", GetAllProduct)
Router.get("/AllCartProducts", GetAllCartProducts)
Router.post("/ProductAdd", AddProduct)
Router.post("/AddToCart/:id", AddProductCart)
Router.put("/ProductUpdate/:id", UpdateProduct)
Router.delete("/ProductDelete/:id", DeleteProduct)

export default Router;