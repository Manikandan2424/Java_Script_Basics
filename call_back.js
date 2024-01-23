// call back => a function is embedded inside/called by another function through parameters.
// step 1 : need to create two function

function ramusomu(Welcomemgs,callback){    // callback apadinu vekanum nu illa vera enthaname aanalum vekalam comma ku aprm kudukarthu callback name varum
    setTimeout(function(){
        // console.log(Welcomemgs)
        callback(); // callback apadinu vekanum nu illa vera enthaname aanalum vekalam comma ku aprm kudukarthu callback name varum
        console.log(Welcomemgs)
    },100)
} 

function miniani(){
    console.log("Choose another college")
}

ramusomu("Hello Ramu and Somu \nWelcome to kongu engineering college",miniani)