import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  console.log(typeof members);
  let team =
    typeof members === "object" && Array.isArray(members)
      ? members
          .filter((el) => typeof el === "string")
          .map((el) =>
            el
              .split("")
              .filter((e) => e !== " ")
              .join("")
              .slice(0, 1)
              .toUpperCase()
          )
          .sort()
          .join("")
      : false;

  return team;
}
