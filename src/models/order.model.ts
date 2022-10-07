import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interfaces/order.interfaces';
import connection from './connection';

export default class ModelOrder {
  public connection: Pool;
  
  constructor() {
    this.connection = connection;
  }

  public gellAll = async (): Promise<IOrder[]> => {
    const queryOrders = 'SELECT * FROM Trybesmith.Orders';

    const [orders] = await this.connection
      .execute(queryOrders);

    const queryProducts = 'SELECT * FROM Trybesmith.Products WHERE orderId = ?';
    
    const results = await Promise.all(Object.values(orders)
      .map(async (value) => {
        const [products] = await this.connection
          .execute(queryProducts, [value.id]);
        
        const productsIds = Object.values(products).map((prod) => prod.id);
        
        return { ...value, productsIds };
      }));

    return results as IOrder[];
  };
}
