import mongoose, { Schema } from "mongoose";
import {
  TProduct,
  TProductInventory,
  TProductVariant,
} from "./product.interface";

const productVariantSchema = new Schema<TProductVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});
const productInventorySchema = new Schema<TProductInventory>({
  inStock: { type: Boolean, required: true },
  quantity: { type: Number, required: true },
});

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String, required: true }],
  variants: [{ type: productVariantSchema, _id: false }],
  inventory: { type: productInventorySchema, _id: false },
});

export const ProductModel  = mongoose.model<TProduct>('Product', productSchema);
