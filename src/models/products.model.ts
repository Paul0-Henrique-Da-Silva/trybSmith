import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProducts } from '../interfaces/products.interfaces';
import conn from './conn';

export default class ModalProduct {
  private conn: Pool;

  constructor() {
    this.conn = conn;
  }

  public create = async (products: IProducts): Promise<IProducts> => {
    const { name, amount } = products;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)';
    const values = [name, amount];

    const [result] = await this.conn.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;

    const created: IProducts = { id, ...products };
    return created;
  };
}
