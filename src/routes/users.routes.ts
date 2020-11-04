import { Router } from 'express';
import knex from '../database/connection';
import userAuthTwo from '../middlewares/'

const usersRouter = Router();

usersRouter.get('/', userAuthTwo , async (request, response) => {
    const users = await knex('user').select('*');

    return response.json(users)
});

usersRouter.get('/:id', async (request, response) => {
    const { id } = request.params

    const users = await knex('user').select(id);

    return response.json(users)
});


usersRouter.post('/', async (request, response) => {
    const { email , senha } = request.body;

    const users = { email, senha };

    const newIds = await knex('user').insert(users)

    return response.json({
        id: newIds[0],
        ...users
    })
})

export default usersRouter;
