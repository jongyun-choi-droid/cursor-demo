import { isValidEmail } from './validator.js';

export function login(email, password) {
  if (!isValidEmail(email)) {
    return { success: false, error: '유효하지 않은 이메일 형식입니다.' };
  }
  return { success: true, email, password };
}
