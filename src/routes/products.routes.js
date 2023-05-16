import { Router } from "express";
import { uploader } from "../utils.js";
//import { productModel } from "../model/product.model.js";
import {
  getAllProducts,
  getOneById,
  uploaderProduct,
  updateOneProduct,
  deleteById,
} from "../controllers/productsController.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:pid", getOneById);
router.post("/add", uploader.single("thumbnail"), uploaderProduct);
router.put("/update/:pid", updateOneProduct);
router.delete("/delete/:pid", deleteById);

export default router;
