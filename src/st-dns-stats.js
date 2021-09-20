import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let DNS = {};
  let arr = domains.map((e) => e.split(".").reverse());
  arr.forEach((e) =>
    e.reduce((acc, w, i) => {
      let d = "." + e.slice(0, i + 1).join(".");
      return acc[d] ? acc[d]++ : (acc[d] = 1), acc;
    }, DNS)
  );
  return DNS;
}
