const SpecialCharacter = (input) => {
  let result = input.split(/[\+?{}.!]/).length - 1
  return result
}

export { SpecialCharacter }
