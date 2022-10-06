import { Request, Response } from 'express';
import ServiceProducts from '../service/products.service';

export default class ControllerProduct {
  private service: ServiceProducts; 

  constructor() {
    this.service = new ServiceProducts();
  }

  public create = async (request: Request, response: Response) => {
    try {
      const { name, amount } = request.body;
      const result = await this.service.create({ name, amount });
      return response.status(201).json(result);
    } catch (error) {
      console.error();
      return response.status(500).json({ message: 'tente mais tarde..' });
    }
  };
}
