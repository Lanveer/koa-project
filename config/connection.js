
// exports.production = function () {
//     pro={
//         env: 'development', //环境名称
//         port: 6666,         //服务端口号
//         database: {
//             DATABASE: 'lanveer',
//             USERNAME: 'root',
//             PASSWORD: 'root',
//             PORT: '3306',
//             HOST: 'localhost'
//         }
//     }
// };
//
//
//
// exports.development = function () {
//     dev={
//         env: 'development', //环境名称
//         port: 8888,         //服务端口号
//         database: {
//             DATABASE: 'lanveer',
//             USERNAME: 'root',
//             PASSWORD: 'root',
//             PORT: '3306',
//             HOST: 'localhost'
//         }
//     }
// };


const config = {
    // 启动端口
    port: 3000,

    // 数据库配置
    database: {
        DATABASE: 'lanveer',
        USERNAME: 'root',
        PASSWORD: 'root',
        PORT: '3306',
        HOST: 'localhost'
    }
};

module.exports = config;
