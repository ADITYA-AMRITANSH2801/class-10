

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the first variable: ');


function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap)
  }


function draw()
{
}
function swap (){
[a,b]=[b,a]
console.log("the value of after swaping ",+a)
console.log("the value of after swaping ",+b)
}