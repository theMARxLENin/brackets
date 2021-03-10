module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false
  }
  var temp = bracketsConfig.map(pair => pair.join(""))
  
  while (temp.some(item => str.includes(item))) {
    for (let subStr of temp) {
      str = str.replace(subStr, "")
    }
  }
  return (str.length === 0)
}
