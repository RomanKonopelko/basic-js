import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error();
  }

  let month = date !== null ? date.getMonth() : undefined;

  if (!isNaN(month) && month !== null) {
    if (month <= 1 || month === 11) return "winter";
    if (month <= 4 && month > 1) return "spring";
    if (month <= 7 && month > 4) return "summer";
    if (month <= 10 && month > 7) return "autumn";
  } else {
    return "Unable to determine the time of year!";
  }
  // remove line with error and write your code here
}
