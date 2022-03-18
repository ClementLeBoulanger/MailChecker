const ParagraphCount = (input) => {
  let count = input.split(/\n{2}/).length
  let result
  if (count >= 3 && count <= 7) {
    result = {
      label: "Number of paragraph",
      score: 2,
      advice: "Your email has the right number of paragraphs."
    }
  } else if (count > 7 && count < 10) {
    result = {
      label: "Number of paragraph",
      score: 1,
      advice: "Your email should contain between 3 and 7 paragraphs."
    }
  } else if (count > 10 || count < 3) {
    result = {
      label: "Number of paragraph",
      score: 0,
      advice: "Your email should contain between 3 and 7 paragraphs."
    }
  }

  return result
}

export { ParagraphCount }
