const getTransactionsUseCase = require('./GetAll/GetTransactionsUseCase.ts');
const getTransactionByIdUseCase = require('./GetById/GetTransactionByIdUseCase.ts');
const createTransactionUseCase = require('./Create/CreateTransactionUseCase.ts');
const deleteTransactionById = require('./Delete/DeleteTransactionByIdUseCase.ts');
const updateTransactionByIdUseCase = require('./UpdateById/UpdateTransactionByIdUseCase.ts');

module.exports = {
  getTransactionsUseCase,
  getTransactionByIdUseCase,
  createTransactionUseCase,
  deleteTransactionById,
  updateTransactionByIdUseCase
}