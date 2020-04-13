import { hash160 } from "../../util/Hash160";
import { ScriptCmd } from "../ScriptCmd";
import { ScriptElement } from "../ScriptElement";

/**
 * Performs a hash160 on the
 * @param stack
 */
export function opHash160(stack: ScriptCmd[]): boolean {
  // return false when stack is empty
  if (!stack.length) {
    return false;
  }

  // pop element off stack
  const element = stack.pop() as Buffer;

  // ensure element is a buffer
  if (!Buffer.isBuffer(element)) {
    return false;
  }

  // push hashed element onto stack
  stack.push(hash160(element));

  // return true
  return true;
}
