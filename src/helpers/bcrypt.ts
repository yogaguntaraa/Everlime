import { compareSync, hashSync } from "bcryptjs"

export function hashPassword(password: string) {
  return hashSync(password);
}

export function comparePassword(password: string, hashPassword: string) {
  return compareSync(password, hashPassword)
}