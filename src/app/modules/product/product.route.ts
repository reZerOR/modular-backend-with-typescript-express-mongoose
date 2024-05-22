import express from "express"
import { ProductController } from "./product.controller"

const router = express.Router()

// routers 
router.post("/", ProductController.createProduct)
router.get('/', ProductController.getAllProducts)
router.get('/:productId', ProductController.getOneProduct)
router.put('/:productId', ProductController.updateOneProduct)
router.delete('/:productId', ProductController.deleteOneproduct)




export const ProductRoutes = router