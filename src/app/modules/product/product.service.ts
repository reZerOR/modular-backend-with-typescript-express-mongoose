import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFormDB = async (searchTerm: string | undefined) => {
  if (searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    const result = await ProductModel.find({ name: regex });
    return result;
  }
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

const deleteOneProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};
const decreaseQuantityOfProduct = async (id: string, quantity: number) => {
  const result = await ProductModel.updateOne(
    { _id: id },
    [
      {
        $set: {
          "inventory.quantity": {
            $subtract: ["$inventory.quantity", quantity],
          },
        },
      },
      {
        $set: {
          "inventory.inStock": {
            $cond: {
              if: {
                $lte: [{ $subtract: ["$inventory.quantity", quantity] }, 0],
              },
              then: false,
              else: true,
            },
          },
        },
      },
    ]
  );
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFormDB,
  getOneProductFromDB,
  updateOneProductInDB,
  deleteOneProductFromDB,
  decreaseQuantityOfProduct,
};
