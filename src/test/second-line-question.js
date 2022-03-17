const SecondLineQuestion = (input) => {
  const model = /^.*\n{1}.*[?]+/
  let secondLineQuestion = model.test(input)
  let result
  if (secondLineQuestion) {
    result = 0
  } else {
    result = 2
  }

  return result
}

export { SecondLineQuestion }
