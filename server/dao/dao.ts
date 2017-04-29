import * as mysql from 'mysql';
export class DAO {
  connectToDatabase(): mysql.Connection {
    var connection = mysql.createConnection({
      host: 'localhost',
      port: 3000,
      user: 'stuebz88',
      password: '0479888',
      database: 'stuebz88'
    });
    return connection;
  }
}
