const wordings = require("../wordings.json");

const wordCount = (input) => {
  const cleanInput = input.replaceAll(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?§]/g, ' ');
  const wordArray = cleanInput.split(' ');
  const count = wordArray.filter(word => word !== '').length;

  if (count > 6) {
    return {
      score: 0,
      label: wordings.tests.wordCount.label,
      advice: `${count} ${wordings.word}s. ${wordings.tests.wordCount.advices.zero.over}`
    };
  } else if (count > 4) {
    return {
      score: 1,
      label: wordings.tests.wordCount.label,
      advice: `${count} ${wordings.word}s. ${wordings.tests.wordCount.advices.one}`
    };
  } else if (count === 0) {
    return {
      score: 0,
      label: wordings.tests.wordCount.label,
      advice: wordings.tests.wordCount.advices.zero.zero
    };
  } else {
    return {
      score: 2,
      label: wordings.tests.wordCount.label,
      advice: `${count} ${wordings.word}${count < 2 ? '' : 's'}. ${wordings.tests.wordCount.advices.two}`
    };
  }
}

export { wordCount }
