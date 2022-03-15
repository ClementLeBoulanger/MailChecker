const WordCount = (input) => {
  let count = input.split(/\b\w+\b/).length - 1
  return count
}

export { WordCount }
