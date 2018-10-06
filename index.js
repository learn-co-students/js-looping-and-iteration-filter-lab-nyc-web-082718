function findMatching(arr, name) {
  return arr.filter(function (n) {
    return name.toLowerCase() === n.toLowerCase();
  });
}

function fuzzyMatch(arr, name) {
  return arr.filter(function (n) {
    return n[0].toLowerCase() === name[0].toLowerCase();
  });
}

function matchName(arr, name) {
  return arr.filter(function (o) {
    return o.name.toLowerCase() === name.toLowerCase();
  });
}
