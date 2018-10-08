// Code your solution in this file
function findMatching(drivers, crit){
  let matches = [];
  for (const driver of drivers){
    if (driver.toLowerCase() === crit.toLowerCase()) {
      matches.push(driver)
    }
  }
  return matches
}

function fuzzyMatch(drivers, crit){
  let matches = []
  for (const driver of drivers){
    if (driver.slice(0,crit.length) == crit){
      matches.push(driver)
    }
  }
  return matches
}

function matchName(drivers, crit){
  let matches = []
  for (const driver of drivers){
    if (driver.name === crit){
      matches.push(driver)
    }
  }
  return matches
}
