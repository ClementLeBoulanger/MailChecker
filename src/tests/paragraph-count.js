const wordings = require("../wordings.json");

const paragraphCount = (input) => {
  const count = input.split(/\n{2,}/).length;

  if (count >= 3 && count <= 7) {
    return {
      score: 2,
      label: wordings.tests.paragraphCount.label,
      advice: `${count} ${wordings.paragraph}s. ${wordings.tests.paragraphCount.advices.two}`
    };
  } else if (count > 7 && count < 10) {
    return {
      score: 1,
      label: wordings.tests.paragraphCount.label,
      advice: `${count} ${wordings.paragraph}s. ${wordings.tests.paragraphCount.advices.one}`
    };
  } else if (count > 10 || count < 3) {
    return {
      score: 0,
      label: wordings.tests.paragraphCount.label,
      advice: `${count} ${wordings.paragraph}${count < 2 ? '' : 's'}. ${wordings.tests.paragraphCount.advices.zero}`
    };
  }
}

export { paragraphCount }
