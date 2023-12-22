import { Router } from "express"
import { createClient, getClient, getClients } from "./controllers/clients";

const router = Router();

router.get("/clients", getClients);

router.get("/clients/:id", getClient);

router.post("/clients", createClient);

export default router