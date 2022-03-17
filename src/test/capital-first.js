const CapitalFirst = (input) => {
  const model = /[A-Z]/
  let capitalFirst = model.test(input.charAt(0))
  let result = 2
  if (capitalFirst) {
    result = 0
  }

  return result
}

export { CapitalFirst }
