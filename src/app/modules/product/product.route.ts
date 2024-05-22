import express from "express"
import { ProductController } from "./product.controller"

const router = express.Router()

// routers 
router.post("/", ProductController.createProduct)
router.get('/', ProductController.getAllProducts)
router.get('/:productId', ProductController.getOneProduct)



export const ProductRoutes = router