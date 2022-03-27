
import "bootstrap";
import "./stylesheets/index.scss";
import JustGage from "justgage";
import { Scoring } from './scoring';
import { Test } from "./test";
const wordings = require("./wordings.json");

addTestForm();
addGlobalScore();
addDetailScore();
addBtnEventListener();

function addTestForm() {
  document.body.insertAdjacentHTML('beforeend', `
    <form class="mb-3">
      <div class="container pt-5 d-flex justify-content-center">
        <div class="container-mail shadow">

          <div class="window-mail p-2 border-bottom d-flex text-center">
            <div class="window-mail-buttons d-flex">
              <div class="mail-buttons"></div>
              <div class="mail-buttons"></div>
              <div class="mail-buttons"></div>
            </div>
            <h3 class="flex-fill text">meetyourmarket.fr</h3>
          </div>

          <div class="container-receiver-object-mail border-bottom">
            <div class="receiver p-2">${wordings.to} : emailchecker@meetyourmarket.fr</div>
            <div class="object p-2 w-100">${wordings.object} :
              <input class="object-input w-75" name="object" type="text" placeholder="${wordings.objectPlaceholder}"/>
            </div>
          </div>

          <div class="container-body-mail p-2">
            <textarea class="body-input" name="body" type="text-area" placeholder="${wordings.bodyPlaceholder}"></textarea>
          </div>
        </div>
      </div>

      <div class="container d-flex justify-content-center btn-container">
        <button class="btn-send shadow mt-4" id="btn-send" type="submit">💌 ${wordings.testYourEmail}</button>
      </div>
    </form>
  `);
}

function addGlobalScore() {
  document.body.insertAdjacentHTML(
    'beforeend', `<div class="container d-flex justify-content-center" id="global-score"></div>`);
}

function addDetailScore() {
  document.body.insertAdjacentHTML(
    'beforeend', `<div class="container pb-5 d-flex flex-column align-items-center" id="detail-score"></div>`);
}

function addBtnEventListener() {
  const btnSend = document.querySelector('#btn-send');

  btnSend.addEventListener('click', event => {
    event.preventDefault();

    const divDetailScore = document.querySelector('#detail-score');
    const objectInput = document.querySelector('.object-input').value;
    const bodyInput = document.querySelector('.body-input').value;
    const scoring = new Scoring(objectInput, bodyInput);

    cleanPreviousScoring(divDetailScore);
    addGauge(scoring);
    addScoreDescription(divDetailScore, scoring);
    addScoreDetails(divDetailScore, scoring)
  });
}


function cleanPreviousScoring(divDetailScore) {
  if (document.querySelector('#gauge')) document.querySelector('#gauge').remove(); // Remove previous gauge
  divDetailScore.innerHTML = "" // Remove detail scoring
}

function addGauge(scoring) {
  const divGlobalScore = document.querySelector('#global-score');

  divGlobalScore.insertAdjacentHTML('beforeend', '<div id="gauge"></div>') // Add gauge container

  // Add gauge
  new JustGage({
    id: "gauge",
    value: scoring.globalScore,
    min: 0,
    max: 100,
    valueFontColor: scoring.color,
    labelFontColor: "rgb(23, 231, 217)",
    label: "%",
    counter: true,
    noGradient: true,
    customSectors: {
      percents: false,
      ranges: Object.values(Scoring.sectors),
    }
  });
}

function addScoreDescription(divDetailScore, scoring) {
  divDetailScore.insertAdjacentHTML('beforeend', scoring.descriptionHtml)
}

function addScoreDetails(divDetailScore, scoring) {
  let testsGroupByScoreAndByType = scoring.groupTestsByScoreAndByType;

  addPointsScoreDetails(divDetailScore, `${wordings.strongPointsTitle}`, testsGroupByScoreAndByType.strongPoints);
  addPointsScoreDetails(divDetailScore, `${wordings.pointsToReviewTitle}`, testsGroupByScoreAndByType.pointsToReview);
}

function addPointsScoreDetails(divDetailScore, title, groupedTests) {
  if (![...groupedTests.objectTests, ...groupedTests.bodyTests].length) return;

  divDetailScore.insertAdjacentHTML('beforeend', scoreDetailsTitleHtml(title))

  if (groupedTests.objectTests.length) {
    divDetailScore.insertAdjacentHTML('beforeend', scoreDetailsSubtitleHtml(wordings.object))
    groupedTests.objectTests.forEach(test => insertScoreDetail(divDetailScore, test));
  }

  if (groupedTests.bodyTests.length) {
    divDetailScore.insertAdjacentHTML('beforeend', scoreDetailsSubtitleHtml(wordings.body))
    groupedTests.bodyTests.forEach(test => insertScoreDetail(divDetailScore, test));
  }
}

function scoreDetailsTitleHtml(title) {
  return `<div class="detail-score-title fw-light mt-4 mb-2 d-flex justify-content-between align-items-center">${title}</div>`;
}

function scoreDetailsSubtitleHtml(title) {
  return `<div class="detail-score-subtitle mb-2 d-flex justify-content-between align-items-center">${title}</div>`;
}

function insertScoreDetail(divDetailScore, test) {
  divDetailScore.insertAdjacentHTML('beforeend', test.html || Test.html(test.label, test.advice, test.score))
};
