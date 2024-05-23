import express, { Application, NextFunction, Request, Response } from "express";
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRouters } from "./app/modules/order/order.route";

const app: Application = express();
const port = 3000;

app.use(express.json());

// application routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("assignment 2 is running");
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({
    success: false,
    message: "Route not found",
  });
  next();
});

export default app;
