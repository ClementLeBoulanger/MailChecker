class Test {
  constructor(input, testFunction) {
    this.input = input;
    this.testFunction = testFunction;
  }

  get label() {
    return this.testFunction(this.input).label;
  }

  get score() {
    return this.testFunction(this.input).score;
  }

  get advice() {
    return this.testFunction(this.input).advice;
  }

  get marker() {
    const colors = { 0: "red", 1: "orange", 2: "green" };

    return `<div class="marker shadow bg-${colors[this.score]} d-flex flex-shrink-0 align-items-center justify-content-center ml-3"></div>`;
  }
}

export { Test }
