//connect database
import mysql from 'mysql';
import config from '../config/connection'
const pool  = mysql.createPool({
    host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE
});

let query = function(sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve(err)
            } else {
                connection.query(sql, (err, result) => {

                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                    connection.release()

                })
            }
        })
    })
};


module.exports = {
    query
}