import { Router } from "express";

import userRoutes from './users.Routes'
// // import { Route } express from 'express';

const routes = Router();

routes.use('/users', userRoutes)



export default routes;
