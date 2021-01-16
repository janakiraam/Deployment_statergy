const uid = "abc123";

// uid = "abcd123" ==> TypeError: Assignment to constant variable.

var fullName = "Janaki Raam";
var email = "jnk111raam@gmail.com";
var password = 123456;
var confirmPassword = 123456;
var courseCount =0;
var isLoggedInFromGoogle = false;

// var fullName1 = prompt("Enter Full Name");  ==> need to attach with the web page
// alert ("this is test")

console.log("Full Name is: " + fullName);
console.log("The email id is: " , email); //both + and , will work well

// another better way is as below:
// in below code understand quotes' ', " " and bactics ` ` are different. we use bactics
// using this is called as interpolation 

console.log(`
         With UID is: ${uid}
         with Full Name as: ${fullName}
         using email id is : ${email}
         Using password: ${password}
         Now course count is : ${courseCount }

`)