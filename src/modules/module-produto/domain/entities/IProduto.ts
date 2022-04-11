import { CPF } from '../ValueObject/CPF';

export interface IProduto {
  nome: string;
  celular: string;
  matricula: string;
  cpf: CPF;
}