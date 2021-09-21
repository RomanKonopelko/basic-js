import { NotImplementedError } from "../extensions/index.js";

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(e) {
  const a = "ABCDEF";
  const b = "1234567890";
  let hyphens = e.split("").reduce((acc, e) => {
    return e === "-" ? acc++ : acc, acc;
  }, 0);
  let w = e.split("-").reduce((acc, e) => {
    return (
      (e.length === 2 && a.includes(e[0] || e[1])) || b.includes(e[0] || e[1])
        ? acc++
        : acc,
      acc
    );
  }, 0);
  return hyphens === 5 && w === 6;
}
