const ParagraphCount = (input) => {
  let count = input.split(/\n{2}/).length
  let result
  if (count >= 3 && count <= 7) {
    result = 2
  } else if (count > 7 && count < 10) {
    result = 1
  } else if (count > 10 || count < 3) {
    result = 0
  }

  return result
}

export { ParagraphCount }
