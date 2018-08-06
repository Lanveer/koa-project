
const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');


//获取用户

exports.getUser = async (ctx, next) => {

    if(ctx.query.id != 1){
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
    }else{
        ctx.body = {
            username: 'fuck',
            age: 30
        }
    }

};

//用户注册
exports.registerUser = async (ctx, next) => {
    ctx.body={

    }
};
