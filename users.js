const users = [];

exports.addUser = (email, name, password) => {
  if (!users.find((user) => user.email === email)) {
    users.push({ email, name, password });
    return true;
  }
  return false;
};

exports.authenticateUser = (email, password) => {
  return users.find((user) => user.email === email && user.password === password);
};
