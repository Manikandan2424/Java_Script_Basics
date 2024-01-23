//Promise => in call back we are not so sure that the code will get executed in mentioned set time
//1st return Promise
//2nd .then
//3rd .catch
function maatikitaraja()
{
    return Math.random() > 1;
    // return 1; // True statement will execute
    // return 0; // false statement will execute
}
function ramusomu(){   
   return new Promise(function(Successful_resonse,unsuccessful_response){
    
   setTimeout(function()
   {
    if(maatikitaraja())
    {
        unsuccessful_response("Oodipoiru");
    }
    else
    {
        Successful_resonse("Thapichita");
    }
   },1000);
});
}
ramusomu()
    .then(function(message)
    {
        console.log(message);
    })
    .catch(function(error_message)
    {
        console.log(message);
    });

