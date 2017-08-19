module.exports = function(pattern) {
  if(/^[a-z.*]+$/.test(pattern)) {
    pattern = pattern.replace(/\*/g, '%');
    pattern = pattern.replace(/\./g, '_');
  }
  else {
    pattern = '%';
  }
  return pattern;
}
