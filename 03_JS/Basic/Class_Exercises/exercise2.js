function filter(array, test) {
  let passsed = [];
  for (let element of array) {
    if (test(element)) {
      passsed.push(element);
    }
  }
  return passsed
}

filter([1,2,3,4,5,6], e => e % 2 == 0) //gives an even array

/*Transformation function*/

function map(array, test) {
  let mapped = [];
  for(let element of array)
  {
    mapped.push(transforms(element));
  }
  return mapped;
}