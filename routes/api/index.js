var router = require('koa-router')();
var loginRouter = require('./login');

router.use('/login', loginRouter.routes(), loginRouter.allowedMethods());

module.exports = router;
