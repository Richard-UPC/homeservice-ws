import { Router } from "express";
import { GetCategories, GetCategory, CreateCategory } from "./CategoryController";

const router = Router();

router.get("/categories", GetCategories);
router.get("/categories/:id", GetCategory);
router.post("/categories", CreateCategory);
export default router;