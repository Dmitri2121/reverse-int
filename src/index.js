const reverse = (a) => {
  a = a + ''
  const numberReverse = a.split('').reverse().join('');
  return parseInt(numberReverse)
  
}
