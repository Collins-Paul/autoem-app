var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('auth/index', { title: 'Welcome | Login' });
});

// Get registration page
router.get('/register', function(req, res) {
  res.render('auth/register', {title: 'Create Account'});
});

module.exports = router;
