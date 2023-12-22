-- Primeiro execute este comando
--CREATE DATABASE sistema_crud;

CREATE TABLE clients(
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);