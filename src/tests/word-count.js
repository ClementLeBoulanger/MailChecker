const wordCount = (input) => {
  const count = input.split(/\b\w+\b/).length - 1

  if (count >= 6) {
    return {
      label: "Number of word",
      score: 0,
      advice: "The number of words is too high, prefer a number of words between 1 and 4 !"
    };
  } else if (count >= 4) {
    return {
      label: "Number of word",
      score: 1,
      advice: "The number of words is too high, prefer a number of words between 1 and 4 !"
    };
  } else if (count === 0){
    return {
      label: "Number of word",
      score: 0,
      advice: "No email object !"
    };
  } else {
    return {
      label: "Number of word",
      score: 2,
      advice: "Good job ! The length of your email object is optimised ! "
    };
  }
}

export { wordCount }
