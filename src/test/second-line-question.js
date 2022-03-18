const SecondLineQuestion = (input) => {
  const model = /^.*\n{1}.*[?]+/
  let secondLineQuestion = model.test(input)
  let result
  if (secondLineQuestion) {
    result = {
      label: "Question in second line",
      score: 0,
      advice: "The second line of your email should not be a question."
    }
  } else {
    result = {
      label: "Question in second line",
      score: 2,
      advice: "No question in the second line, it's good !"
    }
  }

  return result
}

export { SecondLineQuestion }
