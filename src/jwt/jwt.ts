import jwt, { Secret } from 'jsonwebtoken';
import { IUsers } from '../interfaces/users.interfaces';

const jwtConfig: jwt.SignOptions = {
  expiresIn: 3600,
  algorithm: 'HS256',
};

const createdtoken = (user: IUsers): string => {
  const token = jwt.sign({ data: { username: user.username, id: user.id },
  }, process.env.JWT_SECRET as Secret, jwtConfig);

  return token;
};

export = createdtoken;
