import { Request, Response } from "express";
import productValidation from "./product.validation";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response)=>{
    try {
        const productData = req.body
        const zodParsedData = productValidation.parse(productData)
        const result = await ProductServices.createProductIntoDB(zodParsedData)
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
          });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "not valid json",
            error: error,
          });
    }
}


export const ProductController = {
    createProduct
}