const BulletPoint = (input) => {
  let count = input.split(/[\u2022,\u2023,\u25E6,\u2043,\u2219]/).length - 1
  return count
}

export { BulletPoint }
