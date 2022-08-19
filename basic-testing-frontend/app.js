import { extractInputValues } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResult, outputResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = extractInputValues(form);
  let result = calculateResult(numberInputs);
  let resultText = generateResult(result);
  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
