const SpecialCharacter = (input) => {
  let count = input.split(/[\+?{}.!]/).length - 1
  let result
  if (count > 1) {
    result = 0
  } else if (count === 0) {
    result = 2
  } else if (count === 1) {
    result = 1
  }

  return result
}

export { SpecialCharacter }
