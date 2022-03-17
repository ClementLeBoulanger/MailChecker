import { SubjectInput, BodyInput, scoreOver, subjectTests, bodyTests, scoreTest } from './variables'
import { Test } from './test';

const btnSend = document.querySelector('#btn-send')
const divGlobalScore = document.querySelector('#globalscore')

btnSend.addEventListener('click', event => {
  event.preventDefault()

  let subjectInput = SubjectInput()
  let bodyInput = BodyInput()

  let subjectScore = subjectInput === "" ? 0 : new Test(subjectInput, subjectTests).score
  let bodyScore = bodyInput === "" ? 0: new Test(bodyInput, bodyTests).score

  let globalScore = ((subjectScore + bodyScore)/scoreTest) * scoreOver

  if(document.querySelector('#gauge')){
    document.querySelector('#gauge').remove()
  }

  divGlobalScore.insertAdjacentHTML('beforeend', '<div id="gauge" class="gauge"></div>')

  const g = new JustGage({
    id: "gauge",
    value: globalScore,
    min: 0,
    max: scoreOver,
    valueFontColor: "rgb(255, 0, 89)",
    labelFontColor: "rgb(23, 231, 217)",
    counter: true,
    customSectors: {
      percents: true, // lo and hi values are in %
      ranges: [{
        color: "#FF3B30",
        lo: 0,
        hi: 50
      },
      {
        color: "#3BFF30",
        lo: 51,
        hi: 100
      }]
    }
  });
});
