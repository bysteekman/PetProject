const {
  getTransactionsUseCase,
  getTransactionByIdUseCase,
  updateTransactionByIdUseCase,
  createTransactionUseCase,
  deleteTransactionById
} = require('../../Application/UseCases/Transactions/index.ts');

class TransactionController {
  find() {
    return getTransactionsUseCase();
  }
  create(data) {
    return createTransactionUseCase(data);
  }
  findById(id) {
    return getTransactionByIdUseCase(id);
  }
  deleteById(id) {
    return deleteTransactionById(id);
  }
  updateById(id, data) {
    return updateTransactionByIdUseCase(id, data);
  }
}

module.exports = TransactionController;