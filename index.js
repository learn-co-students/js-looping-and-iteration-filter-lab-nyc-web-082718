// Code your solution in this file

function findMatching(drivers, name) {
  const newDrivers = [];
  for (const driver of drivers) {
    if (driver === name || driver === name.toLowerCase()) {
      newDrivers.push(driver);
    }
  }
  return newDrivers;
}

function fuzzyMatch(drivers, name) {
  const newDrivers = [];
  for (const driver of drivers) {
    if (driver.indexOf(name) === 0) {
      newDrivers.push(driver);
    }
  }
  return newDrivers;
}

function matchName(drivers, name) {
  const newDrivers = [];
  for (const driver of drivers) {
    if (driver.name === name) {
      newDrivers.push(driver);
    }
  }
  return newDrivers;
}
