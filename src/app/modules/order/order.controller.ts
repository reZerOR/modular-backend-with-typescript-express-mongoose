import { Request, Response } from "express";
import { TOrder } from "./order.interface";
import { ProductServices } from "../product/product.service";
import { orderValidation } from "./order.validation";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData: TOrder = req.body;
    const isProductExist = await ProductServices.getOneProductFromDB(
      orderData.productId
    );

    if (isProductExist) {
      if (isProductExist.inventory.quantity < orderData.quantity) {
        res.status(400).json({
          success: false,
          message: "Insufficient quantity available in inventory",
        });
      } else {
        const zodParsedData = orderValidation.parse(orderData);
        console.log(orderData, zodParsedData);

        const result = await OrderServices.createOrderIntoDB(zodParsedData);
        await ProductServices.decreaseQuantityOfProduct(
          orderData.productId,
          orderData.quantity
        );
        res.status(200).json({
          success: true,
          message: "Order created successfully!",
          data: result,
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const result = await OrderServices.getAllOrderFormDB(
      email as string | undefined
    );

    res.status(200).json({
      success: true,
      message: `${
        email
          ? "Orders fetched successfully for user email!"
          : "Orders fetched successfully!"
      }`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders
};
