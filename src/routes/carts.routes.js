import { Router } from "express";
import {
  createCart,
  findCartById,
  updateCart,
  deleteProduct,
  deleteProducts,
  updateAllProducts,
  updateQuantity,
} from "../controllers/cartsController.js";

const router = Router();

router.post("/", createCart);
router.get("/:cid", findCartById);
router.post("/:cid/product/:pid", updateCart);
router.delete("/:cid/product/:pid", deleteProduct);
router.delete("/:cid", deleteProducts);
router.put("/:cid", updateAllProducts);
router.put("/:cid/product/:pid", updateQuantity);

export default router;
