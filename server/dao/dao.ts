import { createConnection, QueryError, RowDataPacket, Connection, OkPacket } from 'mysql';
export class DAOHelper {
  private static connectToDatabase(): Connection {
    var connection = createConnection({
      host: 'localhost',
      port: 3306,
      user: 'stuebz88',
      password: '0479888',
      database: 'stuebz88'
    });
    return connection;
  }
  static executeQuery(query: string): Promise<RowDataPacket[][]> {
    let connection = DAOHelper.connectToDatabase();
    return new Promise<RowDataPacket[][]>(function(resolve, error) {
      let result = connection.query(query, function(error, result:any) {
        resolve(result);
        connection.end();
      });
    });
  }
}
