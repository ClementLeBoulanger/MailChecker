import { SubjectInput, BodyInput, GlobalScore, subjectTests, bodyTests, scoreTest, Marker, deleteAfterClick, scoreColor } from './variables'
import { Test } from './test';

const btnSend = document.querySelector('#btn-send')
const divGlobalScore = document.querySelector('#globalscore')
const divDetailScore = document.querySelector('#detailscore')

btnSend.addEventListener('click', event => {
  event.preventDefault()

  // Calcul du score global
  let globalScore = GlobalScore()

  let subjectInput = SubjectInput()
  let bodyInput = BodyInput()

  // Suppression de la Jauge si resoumission
  if(document.querySelector('#gauge')){
    document.querySelector('#gauge').remove()
  }


  // Insertion de la Jauge
  divGlobalScore.insertAdjacentHTML('beforeend', '<div id="gauge" class="gauge"></div>')


  // Suppresion des éléments après la soumission
  deleteAfterClick('.detail-score')
  deleteAfterClick('.marker')
  deleteAfterClick('.space')
  deleteAfterClick('.detail-score-title')


  // Insertion des détails de score
  let subjectScoreDetail
  subjectInput === "" ? subjectScoreDetail = [{ label: "Mail Subject", score: 0, advice: "You don't have subject's mail !" }] : subjectScoreDetail = (new Test(subjectInput, subjectTests).detailscores)

  let bodyScoreDetail
  bodyInput === "" ? bodyScoreDetail = [{label: "Mail Body", score: 0, advice: "You don't have body's mail !" }] : bodyScoreDetail = (new Test(bodyInput, bodyTests).detailscores)

  divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score-title mb-2 d-flex justify-content-between align-items-center"><strong>Subject </strong></div>`)

  subjectScoreDetail.forEach(element => {
    let marker = Marker(element)
    divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score mb-2 d-flex justify-content-between align-items-center"><div class="w-75"><strong>${element.label} :</strong> ${element.advice}</div> ${marker}</div>`)
  })

  divDetailScore.insertAdjacentHTML('beforeend', `<div class="space"></div>`)

  divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score-title mb-2 d-flex justify-content-between align-items-center"><strong>Body </strong></div>`)

  bodyScoreDetail.forEach(element => {
    let marker = Marker(element)
    divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score mb-2 d-flex justify-content-between align-items-center"><div class="w-75"><strong>${element.label} :</strong> ${element.advice}</div> ${marker}</div>`)
  })


  // Parametrage de la Jauge
  const g = new JustGage({
    id: "gauge",
    value: globalScore,
    min: 0,
    max: scoreTest,
    valueFontColor: scoreColor(globalScore),
    labelFontColor: "rgb(23, 231, 217)",
    counter: true,
    customSectors: {
      percents: true,
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
