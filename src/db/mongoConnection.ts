import mongoose from 'mongoose';

const mongoDbConnection = () => {
  mongoose
    .connect('mongodb://localhost:27017/produto')
    .then(() => {
      console.log('Successfully connected to MongoDB');
    })
    .catch(error => {
      console.log('Connection MongoDB failed.');
      console.error(error);
      process.exit(1);
    });
};

export { mongoDbConnection };
