import { Request, Response } from "express"
import db from "../services/database";


export const getClients = async (req: Request, res: Response) => {
    try {
        const clients = await db.getClients();

        return res.json(clients);
    } catch {

        res.status(500).json({ "menssagem": "Erro interno do servidor" });
    }
}