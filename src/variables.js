const SubjectInput = () => {
  let subjectInput = document.querySelector('.subject-input').value
  return subjectInput
}

const BodyInput = () => {
  let bodyInput = document.querySelector('.body-input').value
  return bodyInput
}

export { SubjectInput, BodyInput }
