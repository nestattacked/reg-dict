module.exports = function(pattern) {
  if(/^\*?\w+\*?$/.test(pattern)) {
    pattern = pattern.replace('*', '%');
  }
  else {
    pattern = '%';
  }
  return pattern;
}
