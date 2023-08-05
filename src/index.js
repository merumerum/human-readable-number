module.exports = function toReadable(number) {
  const numObj = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety' };
  
  let res = '';
  
  const hundred = Math.floor(number / 100) * 100;
  let ten = Math.floor(number / 10) * 10;
  let one = number - hundred - ten;

  if (number === 0) return 'zero';

  if (numObj[number]) return numObj[number];

  if (number < 100) {
    res += `${numObj[ten]} ${numObj[one]}`;
  }
  if (number >= 100) {
    res += `${numObj[hundred / 100]} hundred`;
    number -= hundred;
    if (number > 0 && numObj[number]) {
      res += ` ${numObj[number]}`;
    } else if (number > 0 && number >= 20) {
      ten = Math.floor(number / 10) * 10;
      one = number - ten;
      res += ` ${numObj[ten]} ${numObj[one]}`;
    }
  }
  return res;
}

// let result = toReadable(124);
// console.log(result);









