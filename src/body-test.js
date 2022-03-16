import { CharacterCount } from "./test/character-count";
import { BulletPoint } from "./test/bullet-point";
import { SecondLineQuestion } from "./test/second-line-question";
import { ParagraphCount } from "./test/paragraph-count";

const BodyTest = (input) => {
  let characterCount = CharacterCount(input)
  let bulletPoint = BulletPoint(input)
  let secondLineQuestion = SecondLineQuestion(input)
  let paragraphCount = ParagraphCount(input)

  // Word Count Test
  let resultCharacterCount
  if (characterCount > 1000) {
    resultCharacterCount = 0
  } else if (characterCount < 300) {
    resultCharacterCount = 0
  } else if (characterCount > 300 && characterCount < 400) {
    resultCharacterCount = 2
  } else {
    resultCharacterCount = 1
  }

  //Bullet Point
  let resultBulletPoint
  if (bulletPoint === 0) {
    resultBulletPoint = 0
  } else if (bulletPoint === 1){
    resultBulletPoint = 1
  } else if (bulletPoint > 1) {
    resultBulletPoint = 2
  }

  //Paragraph Number
  let resultParagraphCount
  if (paragraphCount >= 3 && paragraphCount <= 7){
    resultParagraphCount = 2
  } else if (paragraphCount > 7 && paragraphCount < 10){
    resultParagraphCount = 1
  } else if (paragraphCount > 10 || paragraphCount < 3) {
    resultParagraphCount =0
  }

  //Second Line Question
  let resultSecondLineQuestion
  if (secondLineQuestion){
    resultSecondLineQuestion = 0
  } else {
    resultSecondLineQuestion = 2
  }

  if (input === "") {
    let bodyTest = 0
    console.log(`Your score mail's body score is : ${bodyTest} /8`)
    return bodyTest
  } else {
    let bodyTest = resultCharacterCount + resultBulletPoint + resultParagraphCount + resultSecondLineQuestion
    console.log(`Your score mail's body score is : ${bodyTest} /8`)
    return bodyTest
  }
}

export { BodyTest }
