import { SubjectInput, BodyInput } from './variables';
import { WordCount } from './test/word-count';
import { SpecialCharacter } from './test/special-character';
import { CapitalFirst } from './test/capital-first';

const btnSend = document.querySelector('button')



btnSend.addEventListener('click', event => {
  event.preventDefault()
  let subjectInput = SubjectInput()
  let bodyInput = BodyInput()
  console.log(subjectInput)
  console.log(bodyInput)
  console.log(WordCount(subjectInput))
  console.log(WordCount(bodyInput))
  console.log(SpecialCharacter(subjectInput))
  console.log(CapitalFirst(subjectInput))

});
