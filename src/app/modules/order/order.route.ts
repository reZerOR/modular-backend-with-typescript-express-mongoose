import express from "express";
import { OrderController } from "./order.controller";
const router = express.Router();

//routers
router.post("/", OrderController.createOrder);
router.get("/", OrderController.getAllOrders);

export const OrderRouters = router;
