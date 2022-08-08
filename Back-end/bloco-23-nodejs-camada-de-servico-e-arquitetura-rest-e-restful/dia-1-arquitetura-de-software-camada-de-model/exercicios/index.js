const express = require('express');
const { validateFields } = require('./validators/validation');
const User = require('./model/user');

const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/user', validateFields, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const users = await User.getAllUsers();
  const validation = validateFields(firstName, lastName, email, password);

  if (validation) {
		return res.status(400).json({ message: validation });
	};

  await User.insertUser(firstName, lastName, email, password);
	return res.status(201).json({ id: users.length + 1, firstName, lastName, email});
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.getUserById(id);

  if(user.length === 0) return res.status(404).json({ message: 'NOT FOUND' });
  return res.status(200).json({id, firstName: user[0].first_name, lasttName: user[0].last_name, email: user[0].email});
});

app.get('/user', async(req, res) => {
  const users = await User.getAllUsers();
  return res.status(200).json(users);
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const validation = validateFields(firstName, lastName, email, password);

  if (validation) {
		return res.status(400).json({ message: validation });
	};

  const user = await User.updateUser(id, firstName, lastName, email, password);

  return res.status(200).json({id, firstName: user[0].first_name, lasttName: user[0].last_name, email: user[0].email});
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
