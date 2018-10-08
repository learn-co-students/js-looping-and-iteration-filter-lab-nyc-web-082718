// Code your solution in this file
const findMatching = function (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  })
}

const fuzzyMatch = function (list, partialName) {
  let lengthOfName = partialName.length
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName
  })
}

const matchName = function (list, name) {
  return list.filter(function (driverName) {
    return driverName.name.toLowerCase() === name.toLowerCase();
  })
}
