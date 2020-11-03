import { Router } from "express";
// // import { Route } express from 'express';

const routes = Router();

routes.get('/user',(request, response) => {
    return response.json({message: 'hello world'})
})
routes.post('/user',(request, response) => {
    return response.json({message: 'hello world'})
})

export default routes;