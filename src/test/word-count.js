const WordCount = (input) => {
  let count = input.split(/\b\w+\b/).length - 1
  let result
  if (count >= 6) {
    result = 0
  } else if (count >= 4) {
    result = 1
  } else if (count === 0){
    result = 0
  } else {
    result = 2
  }

  return result
}

export { WordCount }
