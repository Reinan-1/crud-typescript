import { Router } from "express"
import { getClients } from "./controllers/clients";

const router = Router();

router.get("/clients", getClients);

export default router