import express from 'express';

const app = express();

app.use(express.json());
// Rota: Endereço completo da requisição (localhost:3333/users)
// Recurso: Qual entidade estamos acessando (/users)

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

const users = [
    'Felipe',
    'Robson',
    'Diego',
    'Carlos'
];

app.get('/users', (request, response) => {

    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {

    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {

    const data = request.body;

    const user = {
        nome: data.nome,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);