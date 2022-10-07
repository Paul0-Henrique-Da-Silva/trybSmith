import { IOrder } from '../interfaces/order.interfaces';
import ModelOrder from '../models/order.model';

export default class ServiceOrder {
  private model: ModelOrder;

  constructor() {
    this.model = new ModelOrder();
  }

  public getAll = async (): Promise<IOrder[]> => {
    const data: IOrder[] = await this.model.gellAll();
    return data;
  };
}
