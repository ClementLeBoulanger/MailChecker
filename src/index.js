import { objectInput, bodyInput, globalScore, objectTests, bodyTests, marker, scoreSector } from './variables'
import { Test } from './test';

const btnSend = document.querySelector('#btn-send')
const divGlobalScore = document.querySelector('#globalscore')
const divDetailScore = document.querySelector('#detailscore')

function insertScoreDetail(test) {
  divDetailScore.insertAdjacentHTML('beforeend', `
    <div class="detail-score mb-2 p-3 d-flex justify-content-between align-items-center">
      <div><strong>${test.label} :</strong> ${test.advice}</div> ${test.marker}
    </div>`)
};

function groupTestsByScoreAndByType(objectScoreDetail, bodyScoreDetail) {
  let testsGroupByScoreAndByType = {
    0: { objectTests: [], bodyTests: [] },
    1: { objectTests: [], bodyTests: [] },
    2: { objectTests: [], bodyTests: [] },
  }

  objectScoreDetail.forEach(test => testsGroupByScoreAndByType[test.score].objectTests.push(test));
  bodyScoreDetail.forEach(test => testsGroupByScoreAndByType[test.score].bodyTests.push(test));

  return testsGroupByScoreAndByType;
};

btnSend.addEventListener('click', event => {
  event.preventDefault();

  // Suppression de la Jauge si resoumission
  if(document.querySelector('#gauge')) document.querySelector('#gauge').remove();

  // Insertion de la Jauge
  divGlobalScore.insertAdjacentHTML('beforeend', '<div id="gauge" class="gauge"></div>')

  // Suppresion des éléments après la soumission
  divDetailScore.innerHTML = ""

  divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score-title font-weight-bold ${scoreSector(globalScore()).textColorClass}">${scoreSector(globalScore()).text}</div>`)

  // Insertion des détails de score
  let objectScoreDetail, bodyScoreDetail;
  objectScoreDetail = objectInput() === "" ? [{ label: "Mail Object", score: 0, advice: "You don't have object's mail !" }] : objectTests.map(testFunction => new Test(objectInput(), testFunction));
  bodyScoreDetail = bodyInput() === "" ? [{label: "Mail Body", score: 0, advice: "You don't have body's mail !" }] : bodyTests.map(testFunction => new Test(bodyInput(), testFunction));

  let testsGroupByScoreAndByType = groupTestsByScoreAndByType(objectScoreDetail, bodyScoreDetail);

  if ([...testsGroupByScoreAndByType[2].objectTests, ...testsGroupByScoreAndByType[2].bodyTests].length) {
    divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score-title mt-4 mb-2 d-flex justify-content-between align-items-center"><strong>✅ Les points forts</strong></div>`)
    if (testsGroupByScoreAndByType[2].objectTests.length) {
      divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score-subtitle mb-2 d-flex justify-content-between align-items-center"><strong>Objet</strong></div>`)
      testsGroupByScoreAndByType[2].objectTests.forEach(test => insertScoreDetail(test));
    }
    if (testsGroupByScoreAndByType[2].bodyTests.length) {
      divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score-subtitle mb-2 d-flex justify-content-between align-items-center"><strong>Corps</strong></div>`)
      testsGroupByScoreAndByType[2].bodyTests.forEach(test => insertScoreDetail(test));
    }
  }

  if ([...testsGroupByScoreAndByType[1].objectTests, ...testsGroupByScoreAndByType[0].objectTests, ...testsGroupByScoreAndByType[1].bodyTests, ...testsGroupByScoreAndByType[0].bodyTests].length) {
    divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score-title mt-4 mb-2 d-flex justify-content-between align-items-center"><strong>🛠 Les points à améliorer</strong></div>`)
    if ([...testsGroupByScoreAndByType[1].objectTests, ...testsGroupByScoreAndByType[0].objectTests].length) {
      divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score-subtitle mb-2 d-flex justify-content-between align-items-center"><strong>Objet</strong></div>`)
      testsGroupByScoreAndByType[1].objectTests.forEach(test => insertScoreDetail(test));
      testsGroupByScoreAndByType[0].objectTests.forEach(test => insertScoreDetail(test));
    }

    if ([...testsGroupByScoreAndByType[1].bodyTests, ...testsGroupByScoreAndByType[0].bodyTests].length) {
      divDetailScore.insertAdjacentHTML('beforeend', `<div class="detail-score-subtitle mb-2 d-flex justify-content-between align-items-center"><strong>Corps</strong></div>`)
      testsGroupByScoreAndByType[1].bodyTests.forEach(test => insertScoreDetail(test));
      testsGroupByScoreAndByType[0].bodyTests.forEach(test => insertScoreDetail(test));
    }
  }

  // Parametrage de la Jauge
  const g = new JustGage({
    id: "gauge",
    value: globalScore(),
    min: 0,
    max: 100,
    valueFontColor: scoreSector(globalScore()).color,
    labelFontColor: "rgb(23, 231, 217)",
    label: "%",
    counter: true,
    noGradient: true,
    customSectors: {
      percents: false,
      ranges: [
        { color: "#ff0000", lo: 0, hi: 49 },
        { color: "#ffa500", lo: 50, hi: 79 },
        { color: "#008000", lo: 80, hi: 100 }
      ]
    }
  });
});

