import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFormDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getOneProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

const updateOneProductInDB = async (id: string, productData: TProduct) => {
  await ProductModel.updateOne({ _id: id }, productData);
  return productData;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFormDB,
  getOneProductFromDB,
  updateOneProductInDB,
};
