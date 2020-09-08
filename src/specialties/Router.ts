import { Router } from "express";
import { GetSpecialties, GetSpecialty, CreateSpecialty } from "./SpecialtyController";

const router = Router();

router.get("/specialties", GetSpecialties);
router.get("/specialties/:id", GetSpecialty);
router.post("/specialties", CreateSpecialty);
export default router;