const wordings = require("../wordings.json");

const secondLineQuestion = (input) => {
  const hasQuestionInSecondLine = /^.*\n{1,}.*[?]+/.test(input);

  if (hasQuestionInSecondLine) {
    return {
      score: 0,
      label: wordings.tests.secondLineQuestion.label,
      advice: wordings.tests.secondLineQuestion.advices.zero
    };
  } else {
    return {
      score: 2,
      label:  wordings.tests.secondLineQuestion.label,
      advice: wordings.tests.secondLineQuestion.advices.two
    };
  }
}

export { secondLineQuestion }
