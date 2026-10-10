var choice=prompt(" 1 for positive or negative, 2 for odd or even, 3 for 2 digit number or not, 4 for three digit number or not and 5 for multiple of 5 or not.");
var number=parseInt(prompt("Please enter your number for checking."));
if(choice=="1"){
    positiveNegative(number)
    
}
else if(choice=="2"){
    oddEven(number)
}
else if(choice=="3"){
    twoDigit(number)
}
else if(choice=="4"){
    threeDigit(number)
}
else if(choice=="5"){
    fiveMultiple(number)
}
function positiveNegative(number){
    if(number>0){
        console.log("The number " + number  +" is positive.");
    }
    else if(number<0){
        console.log("The number " + number +" is negative.");
    }
    else if(number=="0"){
        console.log("Please enter a proper number");
    }
}
function oddEven(number){
    if(number%2==0){             //%=This is known as modulus operater which outputs if there is any remainder or not//
        console.log("The number " + number +"is even.")
    }
    else if(number%2!=0){      //!=This is known as the not operater//
        console.log("The number " + number +" is odd.");
    }
    else if(number=="0"){
        console.log("Please enter a proper number");
    }
}
function twoDigit(number){
    if(number>=10 && number<=99){
        console.log("The number " + number +"is two digit.");
    }
    else{
        console.log("The number " + number +" isn't two digit.");
    }
}
function threeDigit(number){
    if(number>99 && number<1000){
        console.log("The number " + number +"is three digit.");
    }
    else{
        console.log("The number" + number +"isn't three digit");
    }
}
function fiveMultiple(number){
    if(number%5==0){
        console.log("The number " + number +" is a multiple of 5.");
    }
    else{
        console.log("The number " + number +" isn't a multiple of 5.");
    }

}



