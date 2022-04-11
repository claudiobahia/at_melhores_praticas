import { debug } from 'console';
import ProdutoModel from '../../infra/models/ProdutoModel';
import { ProdutoRepository } from '../repo/ProdutoRepository';
import { IProdutoRequestDTO, IProdutoService } from './IProdutoService';

export class ProdutoService implements IProdutoService {
  private produtoRepository: ProdutoRepository;

  constructor(produtoRepository: ProdutoRepository) {
    this.produtoRepository = produtoRepository;
  }
  
  // async BuscarTudo(): Promise<Produto[]>{ 
  //   return await this.produtoRepository.encontrarTodos()
  // }

  async NovoProduto({
    nome,
    celular,
    matricula,
    cpf,
  }: IProdutoRequestDTO) {
    var produtoExiste = await this.produtoRepository.encontrarCPF(cpf.valor);
   if (produtoExiste) throw new Error("");

    const produtoDB = new ProdutoModel({
      nome,
      celular,
      matricula,
      cpf: cpf.valor
    });

    const produto = await this.produtoRepository.criar(produtoDB);
    return produto;
  }
}
