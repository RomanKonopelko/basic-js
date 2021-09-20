import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    value !== undefined ? this.chainArr.push(`( ${String(value)} )`) : this.chainArr.push("( )");
    return this;
  },
  removeLink(position) {
    if (position < 1 || this.getLength() < position || !Number.isInteger(position)) {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let res = this.chainArr.join("~~");
    this.chainArr = [];
    return res;
  },
};
