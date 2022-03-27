const capitalFirst = (input) => {
  const hasCapitalFirst = /[A-Z]/.test(input.charAt(0));

  if (hasCapitalFirst) {
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

export { capitalFirst }
