import { WordCount } from "./test/word-count";
import { SpecialCharacter } from "./test/special-character";
import { CapitalFirst } from "./test/capital-first";

const SubjectTest = (input) => {
  let wordCount = WordCount(input)
  let specialCharacter = SpecialCharacter(input)
  let capitalFirst = CapitalFirst(input)

  // Word Count Test
  let resultWordCount
  if(wordCount >= 6){
    resultWordCount = 0
  } else if (wordCount >= 4){
    resultWordCount = 1
  } else {
    resultWordCount = 2
  }
  console.log(resultWordCount)

  // Special Character Test
  let resultSpecialCharacter = 2
  if(specialCharacter > 1){
    resultSpecialCharacter = 0
  } else if (specialCharacter === 1){
    resultSpecialCharacter = 1
  }
  console.log(resultSpecialCharacter)

  // Capital First Test
  let resultCapitalFirst
  if(capitalFirst){
    resultCapitalFirst = 0
  } else {
    resultCapitalFirst = 2
  }
  console.log(resultCapitalFirst)

  let subjectTest = resultWordCount + resultSpecialCharacter + resultCapitalFirst
  console.log(subjectTest)
}

export { SubjectTest }
