import { SubjectInput, BodyInput, scoreOver, subjectTests, bodyTests, scoreTest } from './variables'
import { Test } from './test';

const btnSend = document.querySelector('#btn-send')
const divGlobalScore = document.querySelector('#globalscore')
const divDetailScore = document.querySelector('#detailscore')

btnSend.addEventListener('click', event => {
  event.preventDefault()

  //Récupération des INPUTS
  let subjectInput = SubjectInput()
  let bodyInput = BodyInput()

  // Récupération des Scores et calcule du score global
  let subjectScore = subjectInput === "" ? 0 : new Test(subjectInput, subjectTests).globalscore
  let bodyScore = bodyInput === "" ? 0: new Test(bodyInput, bodyTests).globalscore

  let globalScore = ((subjectScore + bodyScore)/scoreTest) * scoreOver

  // Suppression de la Jauge si resoumission
  if(document.querySelector('#gauge')){
    document.querySelector('#gauge').remove()
  }

  // Insertion de la Jauge
  divGlobalScore.insertAdjacentHTML('beforeend', '<div id="gauge" class="gauge"></div>')

  // Suppresion des détails de score
  if (document.querySelectorAll('.detail-score')) {
    document.querySelectorAll('.detail-score').forEach(element => {
      element.remove()
    })
  }

  // Suppresion des détails de score
  if (document.querySelectorAll('.marker')) {
    document.querySelectorAll('.marker').forEach(element => {
      element.remove()
    })
  }

  // Insertion des détails de score

  let subjectScoreDetail
  subjectInput === "" ? subjectScoreDetail = [{ score: 0, advice: "You don't have subject's mail !" }] : subjectScoreDetail = (new Test(subjectInput, subjectTests).detailscores)

  let bodyScoreDetail
  bodyInput === "" ? bodyScoreDetail = [{ score: 0, advice: "You don't have body's mail !" }] : bodyScoreDetail = (new Test(bodyInput, bodyTests).detailscores)



  subjectScoreDetail.forEach(element => {
    console.log(element)
    let marker
    if (element.score === 2) {
      marker = '<div class="marker green d-flex align-items-center justify-content-center">+</div>'
    } else if (element.score === 1) {
      marker = '<div class="marker orange d-flex align-items-center justify-content-center">=</div>'
    } else {
      marker = '<div class="marker red d-flex align-items-center justify-content-center">-</div>'
    }
    divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score mb-2 d-flex justify-content-between align-items-center">${element.advice} ${marker}</div>`)
  })

  bodyScoreDetail.forEach(element => {
    console.log(element)
    let marker
    if (element.score === 2) {
      marker = '<div class="marker green d-flex align-items-center justify-content-center">+</div>'
    } else if (element.score === 1) {
      marker = '<div class="marker orange d-flex align-items-center justify-content-center">=</div>'
    } else {
      marker = '<div class="marker red d-flex align-items-center justify-content-center">-</div>'
    }
    divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score mb-2 d-flex justify-content-between align-items-center">${element.advice} ${marker}</div>`)
  })





  // Parametrage de la Jauge
  const g = new JustGage({
    id: "gauge",
    value: globalScore,
    min: 0,
    max: scoreOver,
    valueFontColor: "rgb(255, 0, 89)",
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
