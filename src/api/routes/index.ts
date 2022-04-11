import { Router } from 'express';

import { produtoRouter } from './produto.routes';

const routes = Router();

routes.use('/api', produtoRouter);

export { routes };