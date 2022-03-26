const ParagraphCount = (input) => {
  const count = input.split(/\n{2}/).length;

  if (count >= 3 && count <= 7) {
    return {
      label: "Number of paragraph",
      score: 2,
      advice: "Your email has the right number of paragraphs."
    };
  } else if (count > 7 && count < 10) {
    return {
      label: "Number of paragraph",
      score: 1,
      advice: "Your email should contain between 3 and 7 paragraphs."
    };
  } else if (count > 10 || count < 3) {
    return {
      label: "Number of paragraph",
      score: 0,
      advice: "Your email should contain between 3 and 7 paragraphs."
    };
  }
}

export { ParagraphCount }
