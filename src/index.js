import "./stylesheets/index.scss";
import JustGage from "justgage";
import { Scoring } from './scoring';
import { Test } from './test';

const btnSend = document.querySelector('#btn-send');
const divGlobalScore = document.querySelector('#global-score');
const divDetailScore = document.querySelector('#detail-score');

btnSend.addEventListener('click', event => {
  event.preventDefault();

  const objectInput = document.querySelector('.object-input').value;
  const bodyInput = document.querySelector('.body-input').value;
  const scoring = new Scoring(objectInput, bodyInput);

  cleanPreviousScoring();
  addGauge(scoring);
  addScoreDescription(scoring);
  addScoreDetails(scoring)
});

function cleanPreviousScoring() {
  if (document.querySelector('#gauge')) document.querySelector('#gauge').remove(); // Remove previous gauge
  divDetailScore.innerHTML = "" // Remove detail scoring
}

function addGauge(scoring) {
  divGlobalScore.insertAdjacentHTML('beforeend', '<div id="gauge" class="gauge"></div>') // Add gauge container

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

function addScoreDescription(scoring) {
  divDetailScore.insertAdjacentHTML('beforeend', scoring.descriptionHtml)
}

function addScoreDetails(scoring) {
  let testsGroupByScoreAndByType = scoring.groupTestsByScoreAndByType;

  addPointsScoreDetails("✅ Les points forts", testsGroupByScoreAndByType.strongPoints);
  addPointsScoreDetails("🛠 Les points à améliorer", testsGroupByScoreAndByType.pointsToReview);
}

function addPointsScoreDetails(title, groupedTests) {
  if (![...groupedTests.objectTests, ...groupedTests.bodyTests].length) return;

  divDetailScore.insertAdjacentHTML('beforeend', scoreDetailsTitleHtml(title))

  if (groupedTests.objectTests.length) {
    divDetailScore.insertAdjacentHTML('beforeend', scoreDetailsSubtitleHtml("Objet"))
    groupedTests.objectTests.forEach(test => insertScoreDetail(test));
  }

  if (groupedTests.bodyTests.length) {
    divDetailScore.insertAdjacentHTML('beforeend', scoreDetailsSubtitleHtml("Corps"))
    groupedTests.bodyTests.forEach(test => insertScoreDetail(test));
  }
}

function scoreDetailsTitleHtml(title) {
  return `<div class="detail-score-title mt-4 mb-2 d-flex justify-content-between align-items-center"><strong>${title}</strong></div>`;
}

function scoreDetailsSubtitleHtml(title) {
  return `<div class="detail-score-subtitle mb-2 d-flex justify-content-between align-items-center"><strong>${title}</strong></div>`;
}

function insertScoreDetail(test) {
  divDetailScore.insertAdjacentHTML('beforeend', test.html)
};
