import ProductSchema from "./Schema.js";
import CartProducts from "./CartShema.js";

export const GetAllProduct = async (req, res) => {
    try {
        const AllProducts = await ProductSchema.find()
        if (!AllProducts) {
            res.status(404).json({
                success: false,
                message: "Failed To fetch"
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Fetching Success",
                data: AllProducts
            })
        }
    } catch (error) {
        console.error("Oops! Something is wrong with AddProduct", error)
    }
}

export const AddProduct = async (req, res) => {
    try {

        await ProductSchema.create(req.body)
            .then((data) => { res.status(200).json({ success: true, message: "product added" }) })
            .catch(error => console.log(error))
    } catch (error) {
        console.error("Oops! Something is wrong with AddProduct", error)
    }
}

export const AddProductCart = async (req, res) => {
    try {
        const { id } = req.params;
        const exactProduct = await ProductSchema.findById(id);
        const CheckingProduct = await CartProducts.findById(id);
        if (CheckingProduct) {
            res.status(200).json({ success: false, message: "the product is already Present " })
        } else {
            const addrequest = await CartProducts.create({
                _id: id,
                ProductName: exactProduct.ProductName,
                Price: exactProduct.Price,
                ProductImage: exactProduct.ProductImage,
                Category: exactProduct.Category,
            }).then((data) => {
                res.status(200).json({ success: true, message: "product add to the cart" })
            }).catch(error => console.log(error))
        }
    } catch (error) {
        console.log(error)
    }
}

export const UpdateProduct = async (req, res) => {
    try {

    } catch (error) {
        console.error("Oops! Something is wrong with updateProduct", error)
    }
}

export const DeleteProduct = async (req, res) => {
    try {

    } catch (error) {
        console.error("Oops! Something is wrong with deleteProduct", error)
    }
}

export const GetAllCartProducts = async (req, res) => {
    try {
        const AllProducts = await CartProducts.find()
        if (!AllProducts) {
            res.status(404).json({
                success: false,
                message: "Failed To fetch"
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Fetching Success",
                data: AllProducts
            })
        }
    } catch (error) {
        console.error("Oops! Something is wrong with AddProduct", error)
    }
}