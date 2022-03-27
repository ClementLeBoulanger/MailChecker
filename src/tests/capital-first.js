const wordings = require("../wordings.json");

const capitalFirst = (input) => {
  if (firstIsUppercase(input)) {
    return {
      score: 0,
      label: wordings.tests.capitalFirst.label,
      advice: wordings.tests.capitalFirst.advices.zero
    }
  } else {
    return {
      score: 2,
      label: wordings.tests.capitalFirst.label,
      advice: wordings.tests.capitalFirst.advices.two
    }
  }
}

const firstIsUppercase = (str) => {
  if (str.length === 0) return false;

  const firstLetter = str[0];

  return !!(firstLetter.toUpperCase() === firstLetter && firstLetter !== firstLetter.toLowerCase());
}

export { capitalFirst }
