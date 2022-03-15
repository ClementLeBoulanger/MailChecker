const ParagraphCount = (input) => {
  let count = input.split(/\n{2}/).length
  return count
}

export { ParagraphCount }
