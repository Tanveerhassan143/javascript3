alert("welcome")
//var Subject=prompt("Enter your Subject");

//if(Subject == "English"){
//document.write("<h3>English==>" + " " + "Tota=>100" + "  " + "  " + "Obtained=>55" + "  " + "  " + "Percentage=>55%</h3>");}
//else if (Subject == "Math") {
//document.write("<h3>English==>" + " " + "Tota=>100" + "  " + "  " + "Obtained=>74" + "  " + "  " + "Percentage=>74%</h3>");}
//else if (Subject == "Urdu") {
// document.write("<h3>English==>" + " " + "Tota=>100" + "  " + "  " + "Obtained=>51" + "  " + "  " + "Percentage=>51%</h3>");}
//else if (Subject == "Islamiyat") {
// document.write("<h3>English==>" + " " + "Tota=>100" + "  " + "  " + "Obtained=>43" + "  " + "  " + "Percentage=>43%</h3>");}
//else if (Subject == "Pak Sutdy") {
//document.write("<h3>English==>" + " " + "Tota=>100" + "  " + "  " + "Obtained=>33" + "  " + "  " + "Percentage=>33%</h3>");}
//else {
//document.write("<h4>please reinter correct spalling and correct subject</h4>")}


var weight = prompt("enter your weight")
var time = prompt("enter your time")

if (weight >= 55 && time < 6) {
    alert("ok");
}
else {
    alert("Not ok");

}

var gender = prompt("enter the gender");
if (gender == "Male"){
    alert("Good morning Mr");
}
else if (gender == "Female"){
    alert("Goood morning miss");
}
else {
    alert("write correct gender");
}


//Road Signal indicater
alert("Road Signal indicater");
var signal = prompt("enter the colore indecate the signal");
if(signal=="red"){
    alert("MUST STOP");
}
else if(signal=="yellow"){
    alert("READY TO MOVE");

}
else if(signal=="green"){
    alert("MOVE NOW");
}





//percentage show

var pre= prompt("enter the percentage");
if( pre >=80 && pre<=100){
    alert("A+ Gread");
}
else if( pre >=70 && pre<80){
    alert("A Gread");
}
else if( pre >=60 && pre<=70){
    alert("B Gread");
}
else if( pre >=50 && pre<=60){
    alert("C Gread");
}
else if( pre >=33 && pre<=50){
    alert("D Gread");
}
else if( pre <33){
    alert("Failer");
}
else{
    alert("pleas enter valide percentage");
}








