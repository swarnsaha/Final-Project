const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/register', authController.getRegistrationForm);
router.post('/register', authController.registerUser);
router.get('/login', authController.getLoginForm);
router.post('/login', authController.loginUser);

module.exports = router;
