function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let minCharRequired = 0;
  let smallCharRegEx = new RegExp("[a-z]+");
  let capitalCharRegEx = new RegExp("[A-Z]+");
  let numberRegEx = new RegExp("[0-9]+");
  let specialCharRegEx = new RegExp("[!@#$%^&*()-+]+");
  if(!smallCharRegEx.test(password)) minCharRequired++;
  if(!capitalCharRegEx.test(password)) minCharRequired++;
  if(!numberRegEx.test(password)) minCharRequired++;
  if(!specialCharRegEx.test(password)) minCharRequired++;
  if(password.length +minCharRequired >= 6) return minCharRequired;
  return minCharRequired +(6 - (password.length + minCharRequired));
}

console.log(minimumNumber(7, "AUzs-nV"));