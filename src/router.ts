import { Router } from "express"
import { createClient, getClients } from "./controllers/clients";

const router = Router();

router.get("/clients", getClients);

router.post("/clients", createClient);

export default router