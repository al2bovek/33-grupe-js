function arrayDiff(a, b) {
    
    return a.filter(value => !b.includes(value));
  }

console.log((arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]"));

function arrayDiff(a, b) {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
          a.splice(i, 1);
          i--;
        }
      }
    }
    return a;
  }
  console.log(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
