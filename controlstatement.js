// looping statment or Control statement

// for loop
var sum=0
for(var i=0 ; i<10 ; i++)
{
    sum=sum+i;
}
console.log(sum)

// while loop
var i=0;
var sum=10;
while(i<10)
{
    sum=sum+i;
    i++;
}
console.log(sum)

//do...while loop
var sum=20
var i=0
do{
    sum=sum+i;
    i++;
}while(i<10);
console.log(sum)

// array initialization and validity 

// Example 1
arr=[1,2,3]
console.log(arr.length)
for(var i=0; i<arr.length; i++)
{
    console.log(arr[i])
}

// Example 2
arr=[1,2,3.4]
console.log(arr.length)
for(var i=0; i<arr.length; i++)
{
    console.log(arr[i])
}

// Example 3  
arr=[1,2,3,false,true]
console.log(arr.length)
for(var i=0; i<arr.length; i++)
{
    console.log(arr[i])
}

// Example 4
arr=[1,2,3,false,true,"Hello"]
console.log(arr.length)
for(var i=0; i<arr.length; i++)
{
    console.log(arr[i])
}

// above all the examples are valid because Java script can hold all the array values

// for_in loop
arr=[1,2,3,false,true,"Hello"]
for (const index in arr) 
{
    console.log("The value present in index ",index," is ",arr[index] )
}

// for_of loop -> It is used to access element directly and you can use element or value
arr=[1,2,3,false,true,"Hello"]
for (const value of arr) {
    console.log(value)
}

// for_each loop you can use element or value
arr=[1,2,3,false,true,"Hello"]
arr.forEach(element => {              
    console.log(element)
});

 