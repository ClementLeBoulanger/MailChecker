const SpecialCharacter = (input) => {
  const count = input.split(/[\+?{}.!]/).length - 1;

  if (count > 1) {
    return {
      label: "Special character",
      score: 0,
      advice: "Too many special characters! The ideal is not to use any."
    };
  } else if (count === 0) {
    return {
      label: "Special character",
      score: 2,
      advice: "No special characters, great !"
    };
  } else if (count === 1) {
    return {
      label: "Special character",
      score: 1,
      advice: "Too many special characters! The ideal is not to use any."
    };
  }
}

export { SpecialCharacter }
