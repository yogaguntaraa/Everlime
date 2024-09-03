import { sign, verify } from "jsonwebtoken";
import * as jose from "jose";

const JWT_SECRET = process.env.JWT_SECRET;
const secret = new TextEncoder().encode(JWT_SECRET);

export function signToken(payload: { id: string }) {
  return sign(payload, Buffer.from(secret));
}

export function verifyToken(token: string) {
  return verify(token, Buffer.from(secret));
}

export async function verifyTokenJose(token: string) {
  // di next verifynya pake jose
  const { payload } = await jose.jwtVerify<{ id: string }>(token, secret);
  return payload;
}