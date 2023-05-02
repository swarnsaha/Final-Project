const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/video');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('resources'));
app.set('view engine', 'pug');

app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use('/auth', authRoutes);
app.use('/video', videoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
