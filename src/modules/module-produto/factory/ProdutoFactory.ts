import { ProdutoController } from '../controllers/ProdutoController';
import { ProdutoRepository } from '../domain/repo/ProdutoRepository';
import { ProdutoService } from '../domain/services/ProdutoService';

export const ProdutoFactory = () => {
  const produtoRepository = new ProdutoRepository();
  const produtoService = new ProdutoService(produtoRepository);
  const produtoController = new ProdutoController(produtoService);
  return produtoController;
};