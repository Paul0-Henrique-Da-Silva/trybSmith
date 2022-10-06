import { IUsers } from '../interfaces/users.interfaces';
import ModalUser from '../models/users.model';

export default class ServiceUsers {
  private model: ModalUser;

  constructor() {
    this.model = new ModalUser();
  }

  public create = async (users: IUsers): Promise<IUsers> => {
    const created = await this.model.create(users);
    return created;
  };
}
