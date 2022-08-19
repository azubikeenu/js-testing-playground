export const generateResult = (result) => {
  let resultText = '';
  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result;
  }
  return resultText;
};

export const outputResult = (resultText) => {
  const output = document.getElementById('result');
  output.textContent = resultText;
};
