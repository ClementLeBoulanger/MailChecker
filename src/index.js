import { SubjectInput, BodyInput } from './variables';
import { SubjectTest } from './subject-test';
import { BodyTest } from './body-test';

const btnSend = document.querySelector('button')



btnSend.addEventListener('click', event => {
  event.preventDefault()
  let subjectInput = SubjectInput()
  let bodyInput = BodyInput()

  let subjectScore = SubjectTest(subjectInput)
  let bodyScore = BodyTest(bodyInput)

  console.log(subjectScore)
  console.log(bodyScore)
  let globalScore = ((subjectScore + bodyScore)/12) * 10
  console.log(`Your mail's score is ${Math.round(globalScore)} / 10`)
});
