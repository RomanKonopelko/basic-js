import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(m) {
  let res = 0;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (i === 0 && m[i][j] !== 0) {
        res += m[i][j];
      } else if ( m[i-1] !== undefined || 0) {
        if(m[i-1][j]!==0){
          res+=m[i][j]
        }
      }
    }
  }
  return res;
}
