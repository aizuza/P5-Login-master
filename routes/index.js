var express = require('express');
var router = express.Router();
const controller = require('./../controllers/index');



/* GET home page. */
router.get('/',controller.LoginHome,controller.index);

//GET home
//Validates login using checkLogin
// - If not logged in, redirects to /login 
router.get('/home', controller.checkLogin, controller.home);

//router.get('/', controller.checkLogin, controller.home);

//GET login
router.get('/login', controller.LoginHome,controller.login);

//POST login
router.post('/login',controller.LoginHome, controller.loginPost);

//GET register
router.get('/register',controller.LoginHome, controller.register);

//POST register
router.post('/register',controller.LoginHome, controller.registerPost);

//GET logout
router.get('/logout', controller.logout);

router.get('/profile', controller.checkLogin, controller.profile);

router.post('/profile/update', controller.checkLogin, controller.uploadProfilePicture, controller.profileUpdate);

router.get('/image/:id', controller.image);

module.exports = router;