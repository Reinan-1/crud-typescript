import { Request, Response } from "express"
import db from "../services/database";

export const getClients = async (req: Request, res: Response) => {
    try {
        const clients = await db.getClients();

        return res.json(clients);
    } catch {

        res.status(500).json({ "menssagem": "Erro interno do servidor." });
    }
};


export const createClient = async (req: Request, res: Response) => {
    const { nome, email } = req.body;

    if(!nome || !email) return res.status(400).json({"messagem": "Nome e/ou Email são obrigatórios."})

    try {
        const emailExists = await db.emailExists(email);

        if(emailExists) return res.status(400).json({"messagem": "Este e-mail já está associado a outro cliente."})

        const client = await db.createClient({nome, email});

        return res.status(201).json(client);
    } catch {
        
        res.status(500).json({ "menssagem": "Erro interno do servidor." });
    }
};