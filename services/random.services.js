const getData = (req, res) => {
  const data = Math.floor(Math.random() * 2);

  if (data % 2 == 0) return res.status(400).json({ message: 'not allowed' });
  res.send('random text');
};

module.exports = { getData };
