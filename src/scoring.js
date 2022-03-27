import { wordCount } from "./tests/word-count";
import { specialCharacter } from "./tests/special-character";
import { capitalFirst } from "./tests/capital-first";
import { bulletPoint } from "./tests/bullet-point";
import { paragraphCount } from "./tests/paragraph-count";
import { secondLineQuestion } from "./tests/second-line-question";
import { characterCount } from "./tests/character-count";
import { Test } from './test';

export class Scoring {
  static get objectTests() { return [wordCount, specialCharacter, capitalFirst] };
  static get bodyTests() { return [bulletPoint, paragraphCount, secondLineQuestion, characterCount] };
  static get maxScore() { return (this.objectTests.length + this.bodyTests.length) * 2 };
  static get sectors() {
    return {
      0: {
        lo: 0,
        hi: 49,
        color: "#FF0000",
        textColorClass: 'red',
        text: "Il y a des améliorations à faire. Corrige ton mail et réessaye encore !",
      },
      1: {
        lo: 50,
        hi: 79,
        color: "#FFA500",
        textColorClass: 'orange',
        text: "Bien joué mais des améliorations sont encore possibles !",
      },
      2: {
        lo: 80,
        hi: 100,
        color: "#008000",
        textColorClass: 'green',
        text: "Bravo !",
      },
    }
  }

  constructor(objectInput, bodyInput) {
    this.objectInput = objectInput;
    this.bodyInput = bodyInput;
  }

  get objectScore() {
    let score = 0;

    if (this.objectInput === "") return score;

    this.constructor.objectTests.forEach(test => score += new Test(this.objectInput, test).score);

    return score;
  }

  get bodyScore() {
    let score = 0;

    if (this.bodyInput === "") return score;

    this.constructor.bodyTests.forEach(test => score += new Test(this.bodyInput, test).score);

    return score;
  }

  get globalScore() {
    return Math.round(100 * (this.objectScore + this.bodyScore) / this.constructor.maxScore);
  }

  get sector() {
    return Object.values(this.constructor.sectors).find(sector => {
      return sector.lo <= this.globalScore && this.globalScore <= sector.hi
    });
  }

  get color() {
    return this.sector.color;
  }

  get textColorClass() {
    return this.sector.textColorClass;
  }

  get text() {
    return this.sector.text;
  }

  get descriptionHtml() {
    return `<div class="detail-score-title font-weight-bold ${this.textColorClass}">${this.text}</div>`;
  }

  get objectScoreDetails() {
    if (this.objectInput !== "") {
      return this.constructor.objectTests.map(testFunction => new Test(this.objectInput, testFunction));
    } else {
      return [{ label: "Mail Object", score: 0, advice: "You don't have object's mail !" }];
    }
  }

  get bodyScoreDetails() {
    if (this.bodyInput !== "") {
      return this.constructor.bodyTests.map(testFunction => new Test(this.bodyInput, testFunction));
    } else {
      return [{ label: "Mail Body", score: 0, advice: "You don't have body's mail !" }];
    }
  }

  get groupTestsByScoreAndByType() {
    let testsGroupByScoreAndByType = {
      0: { objectTests: [], bodyTests: [] },
      1: { objectTests: [], bodyTests: [] },
      2: { objectTests: [], bodyTests: [] },
    }

    this.objectScoreDetails.forEach(test => testsGroupByScoreAndByType[test.score].objectTests.push(test));
    this.bodyScoreDetails.forEach(test => testsGroupByScoreAndByType[test.score].bodyTests.push(test));

    return {
      strongPoints: testsGroupByScoreAndByType[2],
      pointsToReview: {
        objectTests: [...testsGroupByScoreAndByType[1].objectTests, ...testsGroupByScoreAndByType[0].objectTests],
        bodyTests: [...testsGroupByScoreAndByType[1].bodyTests, ...testsGroupByScoreAndByType[0].bodyTests],
      },
    };
  }
}
