"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

// Function to delete duplicates

/*old way*/

function removeDuplicates(arr) {
  const uniqueNames = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueNames.indexOf(arr[i]) === -1) {
      uniqueNames.push(arr[i]);
    }
  }
  return uniqueNames;
}

const uniqueNames = removeDuplicates(names);

console.log(uniqueNames);

/*new way*/
// const uniqueNames = names.filter(
//   (name, index) => names.indexOf(name) === index
// );
