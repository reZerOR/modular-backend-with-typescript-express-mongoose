import { z } from "zod";

const productVarientsValidation = z.object({
  type: z.string(),
  value: z.string(),
});

const productInventoryValidation = z.object({
  quantity: z.number().min(0, { message: "Not valid quantity" }),
  inStock: z.boolean(),
});

const productValidation = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().min(0, { message: "Not valid price" }),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(productVarientsValidation),
  inventory: productInventoryValidation,
});

export default productValidation;
