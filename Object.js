// object

// How will you declare objects
//1st way
var customerdetails = {
    "Name": "Tamil Mani",
    "Phone_number": "93******88",
    "Age": "19",
}

console.log(customerdetails)

// How to add another details in already existed datas

customerdetails["ID"]="21ECR115",
console.log(customerdetails)


// 2nd way
var customerdetail ={}
customerdetail["Name"]="Dhiva"
customerdetail["Phone_number"]="93******82"
customerdetail["Age"]="19"
console.log(customerdetail)

//3rd way
var kongu=new Object()
kongu["Fees"]= 100000
kongu["Accomodation"]="Better"
kongu["Food"]="Pretty Good"
kongu["Hostel_Count"]=10
console.log(kongu)
console.log(kongu.Food)
console.log(kongu["Hostel_Count"])