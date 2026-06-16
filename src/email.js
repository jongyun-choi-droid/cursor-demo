import { isValidEmail } from './validator.js';

export function extractEmails(users) {
  if (!Array.isArray(users)) {
    return [];
  }
  return users.map((user) => user.email);
}

export function getValidEmails(users) {
  return extractEmails(users).filter(isValidEmail);
}

export { isValidEmail };
