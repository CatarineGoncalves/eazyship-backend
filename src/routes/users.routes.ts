import { Router } from 'express';
import knex from '../database/connection';
import userAuth from '../middlewares/authUsers';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
    const users = await knex('user').select('*');

    return response.json(users)
});


usersRouter.post('/', userAuth , async (request, response) => {
    const { email , senha } = request.body;

    const users = { email, senha };

    const newIds = await knex('user').insert(users)

    return response.json({
        id: newIds[0],
        ...users
    })
})

export default usersRouter;
