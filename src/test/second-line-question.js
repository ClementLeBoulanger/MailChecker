const SecondLineQuestion = (input) => {
  const model = /^.*\n{1}.*[?]+/;
  const secondLineQuestion = model.test(input);

  if (secondLineQuestion) {
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

export { SecondLineQuestion }
