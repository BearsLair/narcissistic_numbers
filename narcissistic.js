function narcissistic(value) {
  const numArray = Array.from(String(value), Number);
  const sum = numArray
    .map((num) => Math.pow(num, numArray.length))
    .reduce((acc, curr) => acc + curr);
  if (sum === value) {
    return true;
  } else {
    return false;
  }
}

console.log("7 result...", narcissistic(7));
console.log("153 result...", narcissistic(153));
console.log("122 result...", narcissistic(122));
console.log("487 result...", narcissistic(487));
