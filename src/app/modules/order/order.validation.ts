import { z } from "zod";

export const orderValidation = z.object({
  email: z.string().email({ message: "valid email is required" }),
  productId: z.string(),
  price: z.number(),
  quantity: z.number(),
});
