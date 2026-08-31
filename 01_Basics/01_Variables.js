const accountId = 123342
let accountEmail = "user@example.com"
var accountPassword = "password123"
accountCity = "New York" 
let accountState;

// accountId = 2
accountEmail = "Anurag@example.com"
accountPassword = "newpassword456"
accountCity = "Los Angeles"
console.log(accountId); 
console.table({ accountId, accountEmail, accountPassword, accountCity, accountState });

/*
prefer no to use var because of issue in block scope and function scope.
*/
  
