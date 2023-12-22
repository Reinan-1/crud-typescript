import con from "knex";
import { Client } from "../types/Client";

const knex = con({
    client: "pg",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    }
});

export default {
    getClients: async () => knex<Client>("clients"),

    createClient: async ({ nome, email }: Omit<Client, "id">) => {
        
        const [client] = await knex<Omit<Client, "id">>("clients")
            .insert({ nome, email })
            .returning("*");

        return client;
    },

    emailExists: async (email: string) => knex<Client>("clients").where({email}).first(), 
}

