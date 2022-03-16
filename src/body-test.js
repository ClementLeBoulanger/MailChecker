import { CharacterCount } from "./test/character-count";
import { BulletPoint } from "./test/bullet-point";
import { SecondLineQuestion } from "./test/second-line-question";
import { ParagraphCount } from "./test/paragraph-count";

const BodyTest = (input) => {
  let characterCount = CharacterCount(input)
  let bulletPoint = BulletPoint(input)
  let secondLineQuestion = SecondLineQuestion(input)
  let paragraphCount = ParagraphCount(input)

  console.log(characterCount)
  console.log('hello')

  // Word Count Test
  let resultWordCount
  if (characterCount > 1000) {
    resultWordCount = 0
  } else if (characterCount < 300) {
    resultWordCount = 0
  } else if (characterCount > 300 && characterCount < 400) {
    resultWordCount = 2
  } else {
    resultWordCount = 1
  }
  console.log(resultWordCount)

  //Bullet Point
  let resultBulletPoint
  if (bulletPoint === 0) {
    resultBulletPoint = 0
  } else if (bulletPoint === 1){
    resultBulletPoint = 1
  } else if (bulletPoint > 1) {
    resultBulletPoint = 2
  }
  console.log(resultBulletPoint)

  //Paragraph Number
  let resultParagraphCount
  if (paragraphCount >= 3 && paragraphCount <= 7){
    resultParagraphCount = 2
  } else if (paragraphCount > 7 && paragraphCount < 10){
    resultParagraphCount = 1
  } else if (paragraphCount > 10 || paragraphCount < 3) {
    resultParagraphCount =0
  }
  console.log(resultParagraphCount)

  //Second Line Question
  let resultSecondLineQuestion
  if (secondLineQuestion){
    resultSecondLineQuestion = 0
  } else {
    resultSecondLineQuestion = 2
  }
  console.log(resultSecondLineQuestion)
}

export { BodyTest }
