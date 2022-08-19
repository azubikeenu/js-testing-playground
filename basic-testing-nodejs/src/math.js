function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function addModified(...numbers) {
  return numbers.reduce((sum, current) => sum + current, 0);
}


exports.add = add;
