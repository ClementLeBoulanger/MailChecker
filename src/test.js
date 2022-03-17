class Test {
  constructor(input, functionArray) {
    this.input = input
    this.functionArray = functionArray
  }

  get score() {
    let subjectScore = 0
    this.functionArray.forEach(element => {
      subjectScore = subjectScore + element(this.input)
    });

    return subjectScore
  }
}

export { Test }
