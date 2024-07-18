export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const [index, value] of array.entries()) {
    newArray[index] = appendString + value;
  }
  return newArray;
}

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));