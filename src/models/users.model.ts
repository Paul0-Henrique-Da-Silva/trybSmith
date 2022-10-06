import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUsers } from '../interfaces/users.interfaces';
import connection from './connection';

export default class ModalUser {
  public connection: Pool;

  constructor() { 
    this.connection = connection;
  }

  public create = async (user: IUsers): Promise<void> => {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
     VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];
    await this.connection.execute<ResultSetHeader>(query, values);
  };
}
