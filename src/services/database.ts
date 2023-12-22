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

    getClient: async (id: number) => knex<Client>("clients").where({ id }).first(),

    createClient: async ({ nome, email }: Omit<Client, "id">) => {

        const [client] = await knex<Omit<Client, "id">>("clients")
            .insert({ nome, email })
            .returning("*");

        return client;
    },

    emailExists: async (email: string, id?: number) => {
        const query = knex<Client>("clients").where({ email }).first();

        if(id) query.whereNot({id})

        return query
    }, 

    updateClient: async ({ id, nome, email }: Readonly<Client>) => {

        await knex<Client>("clients")
            .where({ id })
            .update({ nome, email });
    },

    deleteClient: async (id: number) => knex<Client>("clients").where({ id }).delete(),
}

