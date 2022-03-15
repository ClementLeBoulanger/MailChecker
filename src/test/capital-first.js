const CapitalFirst = (input) => {
  const model = /[A-Z]/
  let result = model.test(input.charAt(0))
  return result
}

export { CapitalFirst }
