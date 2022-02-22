import mysql from 'mysql'
import keys from './keys'

const pool= mysql.createPool(keys.Database) // ejecuta la concexion a la BBDd

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB is connected exit XD');
})
export default pool;

