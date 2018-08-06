var router = require('koa-router')();
var loginController = require('../../controller/loginController');

router.get('/getUser', loginController.getUser);
router.get('/registerUser', loginController.registerUser);

module.exports = router;
