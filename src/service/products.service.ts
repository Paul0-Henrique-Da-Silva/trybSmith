import { IProducts } from '../interfaces/products.interfaces';
import ModalProduct from '../models/products.model';

export default class ServiceProducts {
  private model: ModalProduct;

  constructor() {
    this.model = new ModalProduct();
  }

  public getAll = async (): Promise<IProducts[]> => {
    const data: IProducts[] = await this.model.getAll();
    return data;
  };

  public create = async (products: IProducts): Promise<IProducts> => {
    const created = await this.model.create(products);
    return created;
  };
}
