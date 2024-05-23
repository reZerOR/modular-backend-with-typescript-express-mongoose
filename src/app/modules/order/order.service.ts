import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrderFormDB = async (email: string | undefined) => {
  if (email) {
    const result = await OrderModel.find({ email });
    return result;
  } else {
    const result = await OrderModel.find();
    return result;
  }
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderFormDB,
};
