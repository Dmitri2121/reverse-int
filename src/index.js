module.exports = function reverse (n) {
    n = n + ''
    const numberReverse = n.split('').reverse().join('');
    return parseInt(numberReverse)
  }

  