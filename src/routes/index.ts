import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ mensgem: 'oi' }));

export default routes;
