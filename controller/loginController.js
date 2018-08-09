
const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');

import database from '../utils/database';







//获取用户

exports.getUser = async (ctx, next) => {



        let sql ='select * from user';

    database.query(sql).then(function (r) {
        console.log('ewde:', r)
    })





    if(ctx.query.id != 1){
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
    }else{
        ctx.body = {
            username: 'fuck',
            age: 30,
            list:'eeee'
        }
    }

};

//用户注册
exports.registerUser = async (ctx, next) => {
    ctx.body={
        content:'lorem'
    }
};
