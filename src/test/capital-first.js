const CapitalFirst = (input) => {
  const model = /[A-Z]/
  let capitalFirst = model.test(input.charAt(0))
  let result = {
    score: 2,
    advice: "Good job, your email title doesn't start with a capital letter."
  }
  if (capitalFirst) {
    result = {
      score: 0,
      advice: "Your email title should not start with a capital letter"
    }
  }

  return result
}

export { CapitalFirst }
