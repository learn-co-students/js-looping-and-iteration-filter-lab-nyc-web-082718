// Code your solution in this file
function findMatching(array, name){
  return array.filter(function(driver){
    return driver.toUpperCase() === name.toUpperCase()
  })
}

function fuzzyMatch(array, string){
  return array.filter(function(driver){
    return driver.startsWith(string)
  })
}

function matchName(array, name){
  return array.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
