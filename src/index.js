module.exports = function reverse(n) {
  if (Math.sign(n) === 1) {
    let res = n.toString().split('').reverse().join('');
    return res;
  } else {
    n = Math.abs(n);
    let res = n.toString().split('').reverse().join('');
    return res;
  }
}

// let result = reverse(-854);
// console.log(result);




