const wordings = require("../wordings.json");

const characterCount = (input) => {
  const count = input.length;

  if (count > 1000) {
    return {
      score: 0,
      label: wordings.tests.characterCount.label,
      advice: `${count} ${wordings.character}s. ${wordings.tests.characterCount.advices.zero.over}`
    };
  } else if (count < 300) {
    return {
      score: 0,
      label: wordings.tests.characterCount.label,
      advice: `${count} ${wordings.character}${count < 2 ? '' : 's'}. ${wordings.tests.characterCount.advices.zero.under}`
    };
  } else if (count > 300 && count < 400) {
    return {
      score: 2,
      label: wordings.tests.characterCount.label,
      advice: `${count} ${wordings.character}s. ${wordings.tests.characterCount.advices.two}`
    };
  } else {
    return {
      score: 1,
      label: wordings.tests.characterCount.label,
      advice: `${count} ${wordings.character}s. ${wordings.tests.characterCount.advices.one}`
    };
  }
}

export { characterCount }
