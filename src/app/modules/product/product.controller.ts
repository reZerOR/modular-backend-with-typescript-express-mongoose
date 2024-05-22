import { Request, Response } from "express";
import productValidation from "./product.validation";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParsedData = productValidation.parse(productData);
    const result = await ProductServices.createProductIntoDB(zodParsedData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "not valid json",
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFormDB();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong while fetching data",
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts
};
