import mongoose from "mongoose";

const { Schema } = mongoose
const DataStructure = new Schema({
    ProductName: { type: String, required: true },
    Price: { type: Number, required: true },
    ProductImage: { type: String, required: true },
    Category: { type: String, required: true },

}, { timestamps: true });

const ProductSchema = mongoose.model("ProductSchema",DataStructure);

export default ProductSchema;