import { Router } from "express"

const router = Router();

router.get("/", (req, res) => res.json("Tudo Ok"))

export default router