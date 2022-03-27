export class Test {
  static get colors() { return { 0: "red", 1: "orange", 2: "green" } };

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

  get html() {
    return `
      <div class="detail-score mb-2 p-3 d-flex justify-content-between align-items-center">
        <div><strong>${this.label} :</strong> ${this.advice}</div>
        <div class="marker shadow bg-${this.constructor.colors[this.score]} d-flex flex-shrink-0 align-items-center justify-content-center ml-3"></div>
      </div>`
  }
}


