import { z } from "zod";

export const orderValidation = z.object({
  email: z.string().email({ message: "valid email is required" }),
  productId: z.string(),
  price: z.number().min(0, {message: "Not valid price"}),
  quantity: z.number().min(1, {message: 'Not valid quantity'}),
});
