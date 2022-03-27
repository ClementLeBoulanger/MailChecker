export class Test {
  static get colors() { return { 0: "red", 1: "orange", 2: "green" } };

  static html(label, advice, score) {
    return `
      <div class="detail-score mb-2 p-3 d-flex justify-content-between align-items-center">
        <div><strong>${label} :</strong> ${advice}</div>
        <div class="marker shadow bg-${this.colors[score]} d-flex flex-shrink-0 align-items-center justify-content-center ms-3"></div>
      </div>`;
  }

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
    return this.constructor.html(this.label, this.advice, this.score);
  }
}


