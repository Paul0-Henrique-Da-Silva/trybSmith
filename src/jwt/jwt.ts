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

// import jwt, { Secret } from 'jsonwebtoken';
// import dotenv from 'dotenv';
// import { IUsers } from '../interfaces/users.interfaces';

// dotenv.config();

// const { JWT_SECRET } = process.env;
// // const secret: string | object | Buffer = process.env.JWT_SECRET;

// type Secret = string | Buffer | {
//   key: string | Buffer;
//   passphrase: JWT_SECRET;
// }

// const jwtConfig: jwt.SignOptions = {
//   expiresIn: 3600,
//   algorithm: 'HS256',
// };

// const createdtoken = (user: IUsers): string => {
// //   const data = { id: user.id, username: user.username };

//   const token = jwt.sign(

//     { data: { username: user.username, id: user.id } }, Secret, jwtConfig);

//   return token;
// };

// export = createdtoken;