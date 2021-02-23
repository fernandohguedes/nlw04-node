import express, { request, response } from 'express';

const app = express();

/**
 * GET ==> Buscar
 * POST ==> Salvar
 * PUT ==> Alterar
 * DELETE ==> Deletar
 * PATCH ==> Alteração especifica
 */


// http://localhost:3333/users
app.get("/users", (request, response) => {
    return response.json({ message: "Helo Word - NLW04"});
});

app.listen(3333, () => console.log("Server is Running"));