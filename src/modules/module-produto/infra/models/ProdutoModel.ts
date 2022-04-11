import Mongoose from 'mongoose';

const ProdutoModel = new Mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    celular: {
      type: String,
      required: true,
      trim: true,
    },
    matricula: {
      type: String,
      required: true,
      trim: true,
    },
    cpf: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default Mongoose.model('Produto', ProdutoModel);
