import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getRandomIntInclusive = (min: number, max: number): number =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

export async function asyncForEach<T>(
  array: Array<T>,
  callback: (element: T, index: number, array: Array<T>) => void
): Promise<void> {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export const logEntity = (entity: any) => JSON.stringify(entity, null, 2);

// Password utils
export const generatePassword = async (email: string, password: string) =>
  await bcrypt.hash(generateHashSecret(email, password), 10);

export const comparePasswords = async (email: string, password: string, hash: string) =>
  await bcrypt.compare(generateHashSecret(email, password), hash);

export const getSecret = () => (process.env.SERVER_HASH ? process.env.SERVER_HASH : 'dummy$Hash');

export const generateHashSecret = (email: string, password: string) => email + getSecret() + password;

export const generateToken = (email: string) => jwt.sign(email, getSecret(), { expiresIn: '6h' });