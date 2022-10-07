import { Request, Response } from 'express';
import ServiceOrder from '../service/order.service';

export default class ControllerOrder {
  private service: ServiceOrder;

  constructor() {
    this.service = new ServiceOrder();
  }

  public getAll = async (request: Request, response: Response) => {
    const productsByIds = await this.service.getAll();
    response.status(200).json(productsByIds);
  };
}
