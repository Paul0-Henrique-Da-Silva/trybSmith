import { IUsers } from '../interfaces/users.interfaces';
import ModalUser from '../models/users.model';
import createdtoken = require('../jwt/jwt');

export default class ServiceUsers {
  private model: ModalUser;

  constructor() {
    this.model = new ModalUser();
  }

  public create = async (user: IUsers): Promise<string> => {
    await this.model.create(user);
    const token = createdtoken(user);
    return token;
  };
}
