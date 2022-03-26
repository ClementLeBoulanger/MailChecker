const CapitalFirst = (input) => {
  const model = /[A-Z]/;
  const capitalFirst = model.test(input.charAt(0));

  if (capitalFirst) {
    return {
      label: "Start with capital letter",
      score: 0,
      advice: "Your email title should not start with a capital letter"
    }
  } else {
    return {
      label: "Start with capital letter",
      score: 2,
      advice: "Good job, your email title doesn't start with a capital letter."
    }
  }
}

export { CapitalFirst }
