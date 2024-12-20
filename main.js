const express = require('express');
const useRouter = require('./routes/expenses.route');
const randomRauter = require('./routes/random.router');

const app = express();

app.use(express.json());

app.use('/expenses', useRouter);

app.get('/', (req, res) => {
  res.send('hello go to /expenses');
});

app.use('/random', randomRauter);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
