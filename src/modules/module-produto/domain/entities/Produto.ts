import { CPF } from '../ValueObject/CPF';
import { IProduto } from './IProduto';

export class Produto  implements IProduto {
  public nome: string;
  public celular: string;
  public matricula: string;
  public cpf: CPF;

  constructor(nome: string, celular: string, matricula: string, cpf: CPF) {
    this.nome = nome;
    this.celular = celular;
    this.matricula = matricula;
    this.cpf = cpf;
  }
}