import { IProduto } from "../entities/IProduto";
import { CPF } from "../ValueObject/CPF";


interface IProdutoRequestDTO {
    nome: string;
    celular: string;
    matricula: string;
    cpf: CPF;
}

interface IProdutoService {
  NovoProduto({
    nome,
    celular,
    matricula,
    cpf,
  }: IProdutoRequestDTO): Promise<IProduto>;
  // BuscarTudo({
  //   nome,
  //   celular,
  //   matricula,
  //   cpf,
  // }: IProdutoRequestDTO): Promise<IProduto[]>;
}

export { IProdutoRequestDTO, IProdutoService };