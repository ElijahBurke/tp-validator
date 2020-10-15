// Write a function that takes an integer and uses the Luhn's Algorithm to validate it.
// It should return "Invalid" if the number is not valid. If it is valid, it should return a string
// saying "Valid. You have a CREDITCARDCOMPANY." where CREDITCARDCOMPANY is either "VISA", "AMEX" or "MASTERCARD".

// You have 45 minutes - 60 minutes (not that I would check on you).
// Check the test for details.

function validate(num) {
  let type = '';
  num = num.toString();
  if (num.toString().length === 16)
    type = num[0] === '4' ? 'VISA' : 'MASTERCARD';
  if (num.toString().length === 15) type = 'AMEX';
  if (num.toString().length === 13) type = 'VISA';
  if (!type) return 'Invalid';
  let total = 0;
  let tracker = false;
  for (let i = num.length - 1; i >= 0; i--) {
    if (!tracker) total += +num[i];
    else {
      let toAdd = +num[i] * 2;
      if (toAdd < 10) total += toAdd;
      else {
        toAdd = toAdd.toString();
        for (let i = 0; i < toAdd.length; i++) {
          total += +toAdd[i];
        }
      }
    }
    tracker = !tracker;
  }
  return total % 10 == 0 ? `Valid. You have a ${type}.` : 'Invalid';
}

module.exports = validate;
