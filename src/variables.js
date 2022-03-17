import { CharacterCount } from "./test/character-count";
import { BulletPoint } from "./test/bullet-point";
import { SecondLineQuestion } from "./test/second-line-question";
import { ParagraphCount } from "./test/paragraph-count";
import { WordCount } from "./test/word-count";
import { SpecialCharacter } from "./test/special-character";
import { CapitalFirst } from "./test/capital-first";

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

// MARKER
const Marker = (input) => {
  let marker
  if (input.score === 2) {
    marker = `<div class="marker green d-flex align-items-center justify-content-center">${input.score}</div>`
  } else if (input.score === 1) {
    marker = `<div class="marker orange d-flex align-items-center justify-content-center">${input.score}</div>`
  } else {
    marker = `<div class="marker red d-flex align-items-center justify-content-center">${input.score}</div>`
  }

  return marker
}

// SCORE COLOR
const scoreColor = (input) => {
  let color
  if (input < 5) {
    color = 'rgb(255,0,0)'
  } else if (input > 4 && input < 10) {
    color = 'rgb(255,165,0)'
  } else {
    color = 'rgb(0,128,0)'
  }

  return color
}

export { SubjectInput, BodyInput, subjectTests, bodyTests, scoreTest, Marker, scoreColor }
