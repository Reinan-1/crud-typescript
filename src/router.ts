import { Router } from "express"
import { createClient, getClient, getClients, updateClient } from "./controllers/clients";

const router = Router();

router.get("/clients", getClients);

router.get("/clients/:id", getClient);

router.post("/clients", createClient);

router.put("/clients/:id", updateClient);

export default router