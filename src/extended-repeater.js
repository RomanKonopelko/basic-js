import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(
  str,
  { repeatTimes, separator = "+", addition, additionRepeatTimes, additionSeparator = "|" }
) {
  str = String(str);
  let strMain = str;

  if (addition !== undefined) {
    addition = String(addition);
    let additionBase = addition;
    for (let i = 1; i < additionRepeatTimes; i++) {
      addition += additionSeparator + additionBase;
    }
    str = String(str) + addition;
    strMain = str;
  }

  for (let i = 1; i < repeatTimes; i++) {
    str += separator + strMain;
  }

  return str;
}
