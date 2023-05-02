const users = require('../utils/users');

exports.getRegistrationForm = (req, res) => {
  res.render('register');
};

exports.registerUser = (req, res) => {
  const { email, name, password } = req.body;
  if (email && name && password) {
    if (users.addUser(email, name, password)) {
      res.render('login', { message: 'Account created. Please log in.' });
    } else {
      res.render('register', { error: 'User with this email already exists.' });
    }
  } else {
    res.render('register', { error: 'Please fill in all fields.' });
  }
};

exports.getLoginForm = (req, res) => {
  res.render('login');
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.authenticateUser(email, password);
  if (user) {
    req.session.user = { email: user.email, name: user.name };
    res.redirect('/video/dashboard/all');
  } else {
    res.render('login', { error: 'Incorrect email or password.' });
  }
};
