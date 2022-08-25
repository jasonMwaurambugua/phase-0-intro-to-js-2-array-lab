//Array Lab
//jason

const drivers = ["Milo", "Otis", "Garfield"];
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (name) 
  drivers.push(name);
function destructivelyAppendCat (name) {
  cats.push(name);
}

function destructivelyPrependDriver (name) 
  drivers.unshift(name);
function destructivelyPrependCat (name) {
  cats.unshift(name);
}

function destructivelyRemoveLastDriver () 
  drivers.pop();
function destructivelyRemoveLastCat () {
  cats.pop();
}

function destructivelyRemoveFirstDriver () 
  drivers.shift();
function destructivelyRemoveFirstCat () {
  cats.shift();
}

function appendDriver (name) 
  return [...drivers, name];
function appendCat (name) {
  return [...cats, name];
}

function prependDriver (name) 
  return [name, ...drivers];
function prependCat (name) {
  return [name, ...cats];
}

function removeFirstDriver () {
  return drivers.slice(1);
function removeFirstCat () {
  return cats.slice(1);
}

function removeLastDriver () {
  return drivers.slice(0, drivers.length - 1);
} 
function removeLastCat () {
  return cats.slice(0, cats.length - 1);
}
}
