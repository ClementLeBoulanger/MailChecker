const secondLineQuestion = (input) => {
  const hasQuestionInSecondLine = /^.*\n{1}.*[?]+/.test(input);

  if (hasQuestionInSecondLine) {
    return {
      label: "Question in second line",
      score: 0,
      advice: "The second line of your email should not be a question."
    };
  } else {
    return {
      label: "Question in second line",
      score: 2,
      advice: "No question in the second line, it's good !"
    };
  }
}

export { secondLineQuestion }
