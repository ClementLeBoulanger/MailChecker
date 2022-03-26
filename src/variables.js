import { CharacterCount } from "./test/character-count";
import { BulletPoint } from "./test/bullet-point";
import { SecondLineQuestion } from "./test/second-line-question";
import { ParagraphCount } from "./test/paragraph-count";
import { WordCount } from "./test/word-count";
import { SpecialCharacter } from "./test/special-character";
import { CapitalFirst } from "./test/capital-first";
import { Test } from './test';

const objectTests = [WordCount, SpecialCharacter, CapitalFirst];
const bodyTests = [BulletPoint, ParagraphCount, SecondLineQuestion, CharacterCount];

const objectInput = () => document.querySelector('.object-input').value;
const bodyInput = () => document.querySelector('.body-input').value;

const globalScore = () => {
  const scoreTest = (objectTests.length + bodyTests.length) * 2;
  let objectScore = 0;
  let bodyScore = 0;

  if (objectInput() !== "") objectTests.forEach(test => objectScore += new Test(objectInput(), test).score);
  if (bodyInput() !== "") bodyTests.forEach(test => objectScore += new Test(objectInput(), test).score);

  return (100 * (objectScore + bodyScore) / scoreTest);
}

const scoreSector = (input) => {
  if (input < 50) {
    return { color: "#FF0000", textColorClass: 'red', text: "Il y a des améliorations à faire. Corrige ton mail et réessaye encore !" };
  } else if (50 <= input && input < 80) {
    return { color: "#FFA500", textColorClass: 'orange', text: "Bien joué mais des améliorations sont encore possibles !" };
  } else {
    return { color: "#008000", textColorClass: 'green', text: "Bravo !" };
  }
}

export { objectInput, bodyInput, globalScore, objectTests, bodyTests, scoreSector }
