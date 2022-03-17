class Test {
  constructor(input, functionArray) {
    this.input = input
    this.functionArray = functionArray
  }

  get globalscore() {
    let globalscore = 0
    this.functionArray.forEach(element => {
      globalscore = globalscore + element(this.input).score
    });
    return globalscore
  }

  get detailscores() {
    let detailscores = []
    this.functionArray.forEach(element => {
      detailscores.push(element(this.input))
    });
    return detailscores
  }
}

export { Test }
