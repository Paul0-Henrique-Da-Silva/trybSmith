import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProducts } from '../interfaces/products.interfaces';
import connection from './connection';

export default class ModalProduct {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public getAll = async (): Promise<IProducts[]> => {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [data] = await this.connection.execute(query);
    return data as IProducts[];
  };

  public create = async (products: IProducts): Promise<IProducts> => {
    const { name, amount } = products;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)';
    const values = [name, amount];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;

    const created: IProducts = { id, ...products };
    return created;
  };
}
