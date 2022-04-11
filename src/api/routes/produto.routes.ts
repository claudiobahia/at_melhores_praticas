import { Router, Request, Response } from 'express';

import { ProdutoFactory} from '../../modules/module-produto/factory/ProdutoFactory';

const produtoRouter = Router();


const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');



produtoRouter.post('/products', async (request: Request, response: Response) => {
  ProdutoFactory().CadastrarNovoProduto(request, response);
});





produtoRouter.get('/products', async (request: Request, response: Response) => {
  const products = await Produto.query;

  return response.json(products);
});



export { produtoRouter };