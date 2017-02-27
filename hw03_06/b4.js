(() => {
  age = 21;      //Global
  var height = 155; //Local
  if(age == 21)
     height = 178;
  console.log(`height = ${height}`);//178
})();
console.log(`age = ${age}`);//21

var a = 5;
var b = 10;
if (a===5){
  let a = 4; 
  var b = 1; 
  console.log(a); //4!
  console.log(b); //1
}

console.log(a); //5!
console.log(b); //1
