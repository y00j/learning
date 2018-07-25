// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  if (S.length === 0) return [""];
  
  let res = [];
  let firstLetter = S[0];
  let restOfWord = S.slice(1);
  let nextPerms = letterCasePermutation(restOfWord);
  if (isNaN(firstLetter)) {
      let firstLetUpper = firstLetter.toUpperCase();
      let firstLetLower = firstLetter.toLowerCase();
      
      nextPerms.forEach((perm) => {
          let upperPerm = firstLetUpper + perm;
          let lowerPerm = firstLetLower + perm;
          res.push(upperPerm);
          res.push(lowerPerm);
      });
  } else {
      nextPerms.forEach((perm) => {
          res.push(firstLetter + perm);    
      });            
  }
  
  return res;
};