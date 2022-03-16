import { SubjectInput, BodyInput } from './variables';
import { SubjectTest } from './subject-test';
import { BodyTest } from './body-test';

const btnSend = document.querySelector('#btn-send')
const divGlobalScore = document.querySelector('#globalscore')

btnSend.addEventListener('click', event => {
  event.preventDefault()
  let subjectInput = SubjectInput()
  let bodyInput = BodyInput()

  let subjectScore = SubjectTest(subjectInput)
  let bodyScore = BodyTest(bodyInput)

  let globalScore = Math.round(((subjectScore + bodyScore)/12) * 10)

  btnSend.style.display = "none";

  divGlobalScore.insertAdjacentHTML('beforeend', '<div id="gauge" class="gauge"></div>')

  const g = new JustGage({
    id: "gauge",
    value: globalScore,
    min: 0,
    max: 10,
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
