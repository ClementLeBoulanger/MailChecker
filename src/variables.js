import { CharacterCount } from "./test/character-count";
import { BulletPoint } from "./test/bullet-point";
import { SecondLineQuestion } from "./test/second-line-question";
import { ParagraphCount } from "./test/paragraph-count";
import { WordCount } from "./test/word-count";
import { SpecialCharacter } from "./test/special-character";
import { CapitalFirst } from "./test/capital-first";

// SCORE OVER
const scoreOver = 10

// SUBJECT TESTS
const subjectTests = [WordCount, SpecialCharacter, CapitalFirst]

// BODY TESTS
const bodyTests = [BulletPoint, ParagraphCount, SecondLineQuestion, CharacterCount]

// SCORE TEST
const scoreTest = (subjectTests.length + bodyTests.length) * 2

// INPUT
const SubjectInput = () => {
  let subjectInput = document.querySelector('.subject-input').value
  return subjectInput
}

const BodyInput = () => {
  let bodyInput = document.querySelector('.body-input').value
  return bodyInput
}

export { SubjectInput, BodyInput, scoreOver, subjectTests, bodyTests, scoreTest }
