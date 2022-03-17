const WordCount = (input) => {
  let count = input.split(/\b\w+\b/).length - 1
  let result
  if (count >= 6) {
    result = {
      score: 0,
      advice: "The number of words is too high, prefer a number of words between 1 and 4 !"
    }
  } else if (count >= 4) {
    result = {
      score: 1,
      advice: "The number of words is too high, prefer a number of words between 1 and 4 !"
    }
  } else if (count === 0){
    result = {
      score: 0,
      advice: "No email subject !"
    }
  } else {
    result = {
      score: 2,
      advice: "Good job ! The length of your email subject is optimised ! "
    }
  }

  return result
}

export { WordCount }
