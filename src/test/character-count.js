const CharacterCount = (input) => {
  let count = input.length
  let result
  if (count > 1000) {
    result = 0
  } else if (count < 300) {
    result = 0
  } else if (count > 300 && count < 400) {
    result = 2
  } else {
    result = 1
  }

  return result
}

export { CharacterCount }
