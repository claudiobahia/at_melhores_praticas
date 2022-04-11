import { Request, Response } from 'express';
import { IProdutoService } from '../domain/services/IProdutoService';
import { CPF } from '../domain/ValueObject/CPF';

export class ProdutoController {
  private produtoService: IProdutoService;

  constructor(produtoService: IProdutoService) {
    this.produtoService = produtoService;
  }

  async CadastrarNovoProduto(request: Request, response: Response) {
    try {
      const { nome, celular, matricula, cpf } = request.body;
      
      const produto = await this.produtoService.NovoProduto({
        nome,
        celular,
        matricula,
        cpf: new CPF(cpf)
        });

      return response.json(produto);
    } catch (error) {
      return response.status(400).json({ mensagem : error });
    }
  }
  // async BuscarTudo(request: Request, response: Response){
  //   try {
  //     const products = await this.produtoService.BuscarTudo();

  //     return response.json(products);
  //   } catch (error) {
  //     return response.status(400).json({ mensagem : error });
  //   }
  // }



}
