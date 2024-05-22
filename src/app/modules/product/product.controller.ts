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
    const { searchTerm } = req.query;

    const result = await ProductServices.getAllProductsFormDB(
      searchTerm as string | undefined
    );
    res.status(200).json({
      success: true,
      message: `${
        searchTerm
          ? `Products matching search term ${searchTerm} fetched succesfully!`
          : "Products fetched successfully!"
      }`,
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

const getOneProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getOneProductFromDB(productId);
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

const updateOneProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    const zodParsedData = productValidation.parse(productData);
    const result = await ProductServices.updateOneProductInDB(
      productId,
      zodParsedData
    );
    res.status(200).json({
      success: true,
      message: "Products updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong while updating data",
      error: error,
    });
  }
};

const deleteOneproduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteOneProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Products deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong while deleting data",
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateOneProduct,
  deleteOneproduct,
};
