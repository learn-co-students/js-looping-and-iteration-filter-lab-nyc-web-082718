const findMatching = function(obj, key) {
  return obj.filter(name => name.toLowerCase() === key.toLowerCase());
}

const fuzzyMatch = function(obj, key) {
  return obj.filter(name => name.startsWith(key));
}

const matchName = function(obj, key) {
  return obj.filter(entry => entry.name === key);
}
