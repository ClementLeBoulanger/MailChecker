const characterCount = (input) => {
  const count = input.length;

  if (count > 1000) {
    return {
      label: "Number of character",
      score: 0,
      advice: "Your email contains too many characters. Reduce them below 400."
    };
  } else if (count < 300) {
    return {
      label: "Number of character",
      score: 0,
      advice: "Your email does not contain enough characters. Increase them above 300"
    };
  } else if (count > 300 && count < 400) {
    return {
      label: "Number of character",
      score: 2,
      advice: "Your email has the right number of characters (between 300 and 400)."
    };
  } else {
    return {
      label: "Number of character",
      score: 1,
      advice: "The length of your mail can be optimised. Try between 300 and 400 characters."
    };
  }
}

export { characterCount }
