const wordings = require("../wordings.json");

const specialCharacter = (input) => {
  const count = (input.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?§]/g) || []).length;

  if (count > 1) {
    return {
      score: 0,
      label: wordings.tests.specialCharacter.label,
      advice: `${count} ${wordings.specialCharacters}. ${wordings.tests.specialCharacter.advices.zero}`
    };
  } else if (count === 0) {
    return {
      score: 2,
      label: wordings.tests.specialCharacter.label,
      advice: wordings.tests.specialCharacter.advices.two
    };
  } else if (count === 1) {
    return {
      score: 1,
      label: wordings.tests.specialCharacter.label,
      advice: wordings.tests.specialCharacter.advices.one
    };
  }
}

export { specialCharacter }
