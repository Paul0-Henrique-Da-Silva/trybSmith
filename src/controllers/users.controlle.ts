import { Response, Request } from 'express';
import SevicesUsers from '../service/users.service';

export default class ControllerUsers {
  private service: SevicesUsers;

  constructor() {
    this.service = new SevicesUsers();
  }

  public create = async (request: Request, response: Response) => {
    const { username, classe, level, password } = request.body;
    const token = await this.service.create({ username, classe, level, password });
    response.status(201).json({ token });
  };
}
