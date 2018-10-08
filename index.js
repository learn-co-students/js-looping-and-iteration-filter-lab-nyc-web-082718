// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function (name2) {
    return name.toLowerCase() === name2.toLowerCase()})
}

function fuzzyMatch(array, letters) {
  return array.filter(function (name) {
    return name.slice(0, letters.length) === letters})
}

function matchName(array, desiredName) {
  return array.filter(function (person) {
    return person.name === desiredName})
}
