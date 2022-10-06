import { Pool, ResultSetHeader } from 'mysql2';
import { IUsers } from '../interfaces/users.interfaces';
import connection from './connection';

export default class ModalUser {
  public connection: Pool;

  constructor() { 
    this.connection = connection;
  }

  public create = async (users: IUsers): Promise<IUsers> => {
    const { username, classe, level, password } = users;
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
     VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];

    const [{ result }] = await this.connection.execute<ResultSetHeader>(query, values);

    return result;
  };
}
