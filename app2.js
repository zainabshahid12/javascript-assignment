//chap 38-42
 //task 1
 function first(){
    var a = +prompt("Enter the value of a");
    var b = +prompt("Enter the value of b");
    var c = (a,b);
     console.log(c)
}
first()
//Task 2
function isLeapYear() { 
    var year= document.getElementById("year").value; 
      
    document.getElementById("GFG").innerHTML  
        = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
} 
//task 3
function areaoftriangle() {
var a = 5; 
var b = 6; 
var c = 7; 
var s = (a + b + c)/2;
var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
console.log(area);
}
areaoftriangle()
//task 4
var a = +prompt("Enter your physics marks");
var b = +prompt("Enter your chemistry marks");
var c = +prompt("Enter your maths marks");
function mainFunction(){
    Average()
    percentage()
}

function Average(){
    let Average = ((+a) + (+b) + (+c)) / 3;
    console.log("Average" + Average);
}
function percentage(){
    let totalmarks = 300
    let percentage = (((+a) + (+b) + (+c))/totalmarks)*100
    console.log("percentage" + percentage)
}
mainFunction()
// task 5
function func() { 
    var str = 'Departed Train';  
    var index = str.indexOf('Train'); 
    document.write(index + "<br>");  
} 
func(); 
// task 6

function removeVowels(str){
    var vowels = "aieuo";
    var strArr = str.toLowerCase().split("");
    var newArr = strArr.filter(function(letter){
        if(vowels.indexOf(letter)  == -1){
            return letter;
        }
    });
    var string = "";
    newArr.forEach(function(letter){
        string += letter;
    });
    return string;
}

console.log(removeVowels('i am doing assignment of javascript chapters 1-67'));
//task 7
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var res = str.match(/[aeiou]{2}/g);
    return res ? res.length : 0;
  }
  
  var found = findOccurrences();
  
  console.log(found);
  //task 8
  function conversion_distance (){
      var distanceinkm = +prompt("enter the distance between two cities in km");
//   }
// function meter(){
    var meter = distanceinkm/100
document.write("Meter" + meter + "<br>")
// }
// function feet(){
    var feet = distanceinkm*3280.8
    document.write("Feet" + feet + "<br>")
// }
// function inches(){
var inches = distanceinkm*39370.07874
document.write("Inche" + inches + "<br>")
// }
// function centimeter(){
    var centimeter = distanceinkm/100000
document.write("Centimeter" + centimeter + "<br>")
}
conversion_distance();
   // task 9
   function getsalary (){
       var hours = +prompt("please enter the number of hour you worked this week");
       var rate = +prompt("please enter how much money you've earned per hour")
       if (hours>= 40)

       {
       regpay = (rate * 40)
       overtimepay = ((rate * 1.5) * (hours - 40))
       pay = (regpay + overtimepay)
       alert ("You earned overtime this week! Your total pay is " + pay);
       }
       else 
       {
       regpay = (rate * hours)
       overtimepay = 0.00
       alert ("Your total pay is " + regpay);
       }

   }
   getsalary()
   // task 10
   function currencyDenomination() {
    var cash = +prompt("Enter amount to withdraw (in hundred): ");
    var hundred = cash / 100;
    var fifty = cash % 100 / 50;
    var ten = cash % 100 % 50 / 10;
    document.write("you will have " + hundred + "hundred notes" + fifty + " fifity notes" + ten + "ten notes")
   }
   currencyDenomination()
   // chap 43-48
   //task 1
   function clickbtn(){
       alert("Don't stare at me like this")
   }
   clickbtn()
   // task 2
   function showAlert(){
       alert("Thanks for purchasing a phone from us.")
   }
   //task 3
   function SomeDeleteRowFunction() {
    document.getElementById("myTable").deleteRow(0);
   }
   //task 4
//    
function changeImage(){
    var obj_image = document.getElementById('img')
    obj_image.src = 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&w=1000&q=80'
}
function changeImageBefore(){
    var obj_image = document.getElementById('img')
    obj_image.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
}
//task 5
var counter = 0;

function subtract(){
  counter = counter-1;
  document.getElementById("counter").innerHTML = counter;
}

function add(){
  counter = counter + 1;
  document.getElementById("counter").innerHTML = counter;
}

function reset(){
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
}
// chap 49 to 52
//task1
function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
return false;

} function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
    return true;
    }
    else
    {
    alert('User address must have alphanumeric characters only');
    uadd.focus();
    return false;
    }
    }
    function countryselect(ucountry)
    {
    if(ucountry.value == "Default")
    {
    alert('Select your country from the list');
    ucountry.focus();
    return false;
    }
    else
    {
    return true;
    }
    }
    function allnumeric(uzip)
    { 
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers))
    {
    return true;
    }
    else
    {
    alert('ZIP code must have numeric characters only');
    uzip.focus();
    return false;
    }
    }
    function ValidateEmail(uemail)
    {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
    }
} function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}



//task 2
function readmore(){
var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab explicabo possimus dolorem iure corporis ad fuga dignissimos, autem laboriosam aspernatur magni, ex id hic deserunt animi voluptatem rerum nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab explicabo possimus dolorem iure corporis ad fuga dignissimos, autem laboriosam aspernatur magni, ex id hic deserunt animi voluptatem rerum nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab explicabo possimus dolorem iure corporis ad fuga dignissimos, autem laboriosam aspernatur magni, ex id hic deserunt animi voluptatem rerum nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab explicabo possimus dolorem iure corporis ad fuga dignissimos, autem laboriosam aspernatur magni, ex id hic deserunt animi voluptatem rerum nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab explicabo possimus dolorem iure corporis ad fuga dignissimos, autem laboriosam aspernatur magni, ex id hic deserunt animi voluptatem rerum nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab explicabo possimus dolorem iure corporis ad fuga dignissimos, autem laboriosam aspernatur magni, ex id hic deserunt animi voluptatem rerum nihil."
var paragraph = document.getElementById('para')
paragraph.innerHTML = text
}
//task 3
function SomeDeleteRowFunction(){
        document.getElementById("myTable").deleteRow(0);
       }
function SomeEditRowFunction(e){
    var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}

//chap 53-58
//task 1
function showImage(e){
    var modalImage = document.getElementById("modalImage");
    modalImage.src = e.src
}
//task 2
function zoomin() { 
    var GFG = document.getElementById("geeks"); 
    var currWidth = GFG.clientWidth; 
    GFG.style.width = (currWidth + 100) + "px"; 
} 
  
function zoomout() { 
    var GFG = document.getElementById("geeks"); 
    var currWidth = GFG.clientWidth; 
    GFG.style.width = (currWidth - 100) + "px"; 
} 

//chap 58-67
//task 1
var mainContent = document.getElementById("main-content")
console.log(mainContent)
console.log(mainContent.childNodes)

var render = document.getElementsByClassName('render')
console.log(render)

var firstName = document.getElementById('first-name').value = 'Zainab'
var LastName = document.getElementById('last-name').value = 'Shahid'
var email= document.getElementById("email").value = 'Zainabshahid600@gmail.com'
var Country = document.getElementById("country").value = 'Pakistan'
var Contact = document.getElementById("Contact").value = '+92 300 1234567'
 //task 2
 var x = document.getElementById("main-content").nodeType;
 document.write(x)


