const SecondLineQuestion = (input) => {
  const model = /^.*\n{1}.*[?]+/
  let result = model.test(input)
  return result
}

export { SecondLineQuestion }
