// //  Hoisting

// console.log(a);//there is no memory allocated and shows reference error
// var a=10;// global scope and now there is no error and shows undefined

console.log(b);
let b=10; // it shows reference error


// Functional Hoisting

kongu(5,10)
function kongu(a,b)

{
    console.log("Function with argument and without return type")
    for(var i=a;i<b;i++)
    {
        if(i%2==0)
    {
        console.log("The Number ",i," is EVEN")
    }
    else
    {
        console.log("The Number ",i," is ODD")
    }
    } 
}



