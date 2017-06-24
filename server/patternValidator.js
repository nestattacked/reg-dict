module.exports = function(pattern) {
  if(/^\*?\w+\*?$/.test(pattern)) {
    pattern = pattern.replace(/\*/g, '%');
  }
  else {
    pattern = '%';
  }
  return pattern;
}
