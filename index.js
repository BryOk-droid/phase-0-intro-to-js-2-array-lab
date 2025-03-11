// Initial array: ["Milo", "Otis", "Garfield"]
const cats = ["Milo", "Otis", "Garfield"];

// **Destructive Methods**
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// **Non-Destructive Methods**
function appendCat(name) {
  return [...cats, name]; // Returns new array with added cat
}

function prependCat(name) {
  return [name, ...cats]; // Returns new array with added cat at the beginning
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns new array without last element
}

function removeFirstCat() {
  return cats.slice(1); // Returns new array without first element
}
