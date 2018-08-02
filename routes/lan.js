var router = require('koa-router')();

var data={
    name:'lanveer',
    sex:'male',
    date:'2018/08/02',
    subject:'koa2 API'
}

router.get('/', async function (ctx, next) {
    ctx.body = data
})




module.exports = router;

