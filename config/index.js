var connecion = require('./connection');

//根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
// module.exports = {
//     development: connecion.development.port,
//     production: connecion.production.port
// }[process.env.NODE_ENV || 'development'];
