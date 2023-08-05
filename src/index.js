module.exports = function toReadable(number) {
  const numObj = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  let res = '';
  if (number === 0) return 'zero';
  
  for (let key in numObj) {
    if (number == key) {
      return numObj[key];
    } else if (number == key + '00') {
      return numObj[key] + ' hundred';
    }
  }
  for (let key in numObj) {
    if (number > 100 && Math.floor(number / 100) == key) {
      res += numObj[key] + ' hundred' + ' ';
      number -= Math.floor(number / 100) * 100;
    }
  }
  for (let key in numObj) {
    if (number == key) {
      res += numObj[key];
      number -= +numObj[key]; 
    } else if (number < 10 && number == key) {
      res += numObj[key];
      number -= +numObj[key];
    }
  }
  for (let key in numObj) {
    if (Math.floor(number / 10) * 10 == key) {
      res += numObj[key];
    }
  }
  for (let key in numObj) {
    if (number % 10 == key) {
      res += ' ' + numObj[key];
    }
  }
  return res;
}

// let result = toReadable(840);
// console.log(result);