
const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const redis = require('redis');
import database from '../utils/database';

const client = redis.createClient(6379,'127.0.0.1',{password:'fanliang'});
client.set('hello', {a:1, b:2}); // 注意，value会被转为字符串,所以存的时候要先把value 转为json字符串


client.on('error',function (err) {
   console.log('err message is:',err)
});


client.on('connect',runsample);


function runsample() {
    client.set('str','hello world', function (err, res) {
        console.log('res data is:', res.toString())
    });

    client.get("str", function(err, reply) {
        console.log('reply data is', reply.toString());
    })
}

//获取用户

exports.getUser = async (ctx, next) => {

    //     let sql ='select * from user';
    // database.query(sql).then(function (r) {
    //     console.log('ewde:', r)
    // });





    if(ctx.query.id != 1){
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
    }else{
        client.get('name', function(err, value){
            console.log('name is:', value)

        });
        ctx.body = {
            username:'lan',
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
