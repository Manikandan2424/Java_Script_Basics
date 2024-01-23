// Set is collection of unique datas or elements or all unit characters . 
//It cannot print same letter or repeat letter
// 1st example
setExample = new Set("amutha","bakiya","cellia")
set_Example = new Set(["amutha","bakiya","cellia"])
console.log(setExample)
console.log(set_Example)
set_Example.add("deepa")
set_Example.add("deepa")
setExample.add("deepa")
console.log(setExample)
console.log(set_Example)
setExample.delete("deepa")
set_Example.delete("deepa")
set_Example.delete("deepa")
console.log(setExample)
console.log(set_Example)

//using for_in loop
//if you use for_in loop in set it gives empty output
for (const index in setExample) {
      console.log(index,setExample[index])      
}
for (const index in set_Example) {
    console.log(index,set_Example[index])      
}


//using for_of loop
//if you use for_of loop in set it gives output
for (const value of setExample) 
{
    console.log(value)    
}
for (const value of set_Example) 
{
    console.log(value)    
}



// Map is a key value pair
map_Example = new Map([
    ["Name : ","Tamil_Mani"],
    ["id : ","21ECR115"],
])
console.log(map_Example)
map_Example.set("Age :","20")

//using for_in loop
//if you use for_in loop in map it gives empty output

for (const index in map_Example) {
     console.log(index,map_Example[index])      
 }

 //using for_of loop
//if you use for_of loop in set it gives output
for (const value of map_Example) 
{
    console.log(value)    
}


console.log(map_Example.has("Name :"))


