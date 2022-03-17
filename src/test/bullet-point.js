const BulletPoint = (input) => {
  let count = input.split(/[\u2022,\u2023,\u25E6,\u2043,\u2219]/).length - 1
  let result
  if (count === 0) {
    result = 0
  } else if (count === 1) {
    result = 1
  } else if (count > 1) {
    result = 2
  }

  return result
}

export { BulletPoint }
