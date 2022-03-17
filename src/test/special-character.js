const SpecialCharacter = (input) => {
  let count = input.split(/[\+?{}.!]/).length - 1
  let result
  if (count > 1) {
    result = {
      score: 0,
      advice: "Too many special characters! The ideal is not to use any."
    }
  } else if (count === 0) {
    result = {
      score: 2,
      advice: "No special characters, great !"
    }
  } else if (count === 1) {
    result = {
      score: 1,
      advice: "Too many special characters! The ideal is not to use any."
    }
  }

  return result
}

export { SpecialCharacter }
