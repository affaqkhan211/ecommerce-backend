import Product from "../models/productModel.js";


// admin 

export const addProductController = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        return res.status(201).json({
            success: true,
            newProduct
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}

// all users

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        if (!products) {
            return res.status(400).json({
                success: false,
                message: "Products not found"
            })
        }
        return res.status(201).json({
            success: true,
            products
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}

// admin

export const updateProductController = async (req, res) => {
    try {
        let updatedProduct = await Product.findById(req.params.id);
        if (!updatedProduct) {
            return res.status(400).json({
                success: false,
                message: "Product not found"
            })
        }

        updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            updatedProduct
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            error
        })
    }
}

// admin

export const deleteProductController = async (req, res) => {
    try {
        const deleteProduct = await Product.findById(req.params.id);
        if (!deleteProduct) {
            return res.status(201).json({
                success: false,
                message: "Product not found"
            });
        }

        await Product.deleteOne({ _id: req.params.id });

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "server error",
            error,
        })
    }
}