module.exports = function check(str, bracketsConfig) {
  const pairs = {};

  bracketsConfig.forEach(el => pairs[el[0]] = el[1]);

  const brackets = str.split('');
  let count = Math.ceil(brackets.length / 2);

  function deletePair() {
    for (let i = 0; i < brackets.length; i++) {
      if (i + 1 !== brackets.length && pairs[brackets[i]] === brackets[i + 1]) {
        brackets.splice(i, 2);
      }
    }

    if (brackets.length > 0) {
      count--;

      if (count > 0) {
        deletePair();
      }
    }
  }

  deletePair();

  return brackets.length === 0;
}
