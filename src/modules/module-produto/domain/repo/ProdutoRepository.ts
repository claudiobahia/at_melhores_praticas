import ProdutoModel from '../../infra/models/ProdutoModel';
import { Produto } from '../entities/Produto';

class ProdutoRepository {
  async criar(produto: Produto): Promise<Produto> {
    const novoProduto = await ProdutoModel.create(produto);

    return novoProduto;
  }

  // async deletar(id: string): Promise<boolean> {
  //   await ProdutoModel.findByIdAndDelete(id);

  //   return true;
  // }

  async encontrarTodos(): Promise<Produto[]> {
    const produtos = await ProdutoModel.find<Produto>();

    return produtos;
  }

  // async encontrarID(id: string): Promise<Produto | null> {
  //   const produto = await ProdutoModel.findOne({ id });

  //   return produto;
  // }

  async encontrarCPF(cpf: string): Promise<Produto | null> {
    const produto = await ProdutoModel.findOne({ cpf });
    return produto;
  }
}

export { ProdutoRepository };