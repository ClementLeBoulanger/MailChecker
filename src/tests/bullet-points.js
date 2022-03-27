const wordings = require("../wordings.json");

const bulletPoints = (input) => {
  const count = (input.match(/(^|\n)\s*[->\u2022\u2023\u2043\u2219]/g) || []).length;

  if (count === 0) {
    return {
      score: 0,
      label: wordings.tests.bulletPoints.label,
      advice: wordings.tests.bulletPoints.advices.zero
    }
  } else if (count === 1) {
    return {
      score: 1,
      label: wordings.tests.bulletPoints.label,
      advice: wordings.tests.bulletPoints.advices.one
    }
  } else if (count > 1) {
    return {
      score: 2,
      label: wordings.tests.bulletPoints.label,
      advice: wordings.tests.bulletPoints.advices.two
    }
  }
}

export { bulletPoints }
