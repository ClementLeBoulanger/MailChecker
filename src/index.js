import { SubjectInput, BodyInput } from './variables';
import { SubjectTest } from './subject-test';
import { BodyTest } from './body-test';

const btnSend = document.querySelector('button')



btnSend.addEventListener('click', event => {
  event.preventDefault()
  let subjectInput = SubjectInput()
  let bodyInput = BodyInput()
  SubjectTest(subjectInput)
  BodyTest(bodyInput)
});
