import mongoose from "mongoose";

const { Schema } = mongoose
const DataStructureCart = new Schema({
    Quantity: { type: Number, default: 1 },
    ProductName: { type: String, required: true },
    Price: { type: Number, required: true },
    ProductImage: { type: String, required: true },
    Category: { type: String, required: true },

}, { timestamps: true });

const CartProducts = mongoose.model("CartProducts", DataStructureCart);

export default CartProducts;