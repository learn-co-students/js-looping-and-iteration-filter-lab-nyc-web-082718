// Code your solution in this file

function findMatching(drivers, string){

  return drivers.filter(function(word){return word === string || word === string.toLowerCase()})
}

function fuzzyMatch (drivers, partialName) {
  let lengthOfName = partialName.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
