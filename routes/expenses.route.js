const { Router } = require('express');
const {
  getExpense,
  deleteExpense,
  editExpense,
} = require('../services/expenses.services');
const { createExpense } = require('../services/expenses.services');
const hasKeyMiddlewear = require('../middleweares/hasKey.middlewar');
const {
  checkExpensemiddlewear,
} = require('../middleweares/checkExpense.middlewear');
const useRouter = Router();

useRouter.get('/', getExpense);

useRouter.post('/', checkExpensemiddlewear, createExpense);

useRouter.delete('/:id', hasKeyMiddlewear, deleteExpense);

useRouter.put('/:id', editExpense);

module.exports = useRouter;
