// Global Scope  var is mostly used in global scope as well as let also used
var sum=0
for(var i=0 ; i<10 ; i++)
{
    sum=sum+i;
}
console.log(sum)
console.log(i)


// Global Scope  let will be act as an local scope and gives error
var sum=0
for(let v=0 ; v<20 ; v++)
{
    sum=sum+v;
}
console.log(sum)
//console.log(v)

// Block scope
var f=10
console.log(f)
{
    let f=5;
    console.log(f)
}
console.log(f)

// not block scope because we not use let
var f=10
console.log(f)
{
    var f=5;
    console.log(f)
}
console.log(f)


