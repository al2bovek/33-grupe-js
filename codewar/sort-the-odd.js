function sortArray(array) {
    const oddArr = [];
    const evenArr = [];
    const result = [];
  for (let i = 0; i < array.length; i += 1) {
      if (array[i]%2 === 0) {
        evenArr.push(array[i]);
      } else {
        oddArr.push(array[i]);
      }
    }
    oddArr.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i += 1) {
      if (array[i]%2 === 0) {
        result.push(evenArr.shift());
      } else {
        result.push(oddArr.shift());
      }
    }
    return result;
  }
  console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);



  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
 }
 console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);