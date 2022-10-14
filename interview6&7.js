<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <br><br>
    <span>1. Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button</span>
    <div id="01"></div>
    <button onclick="changeText()">click here</button>

    <br><br><hr><br><br>
    <span>2. Write code to get 1st H1 element from a webpage using DOM</span>
    <h1>first</h1>
    <h1>second</h1>
    <h1>third</h1>

    <br><br><hr><br><br>
    <span>3. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second</span><br><br>
    <b id="hr"></b>&nbsp;:&nbsp;
    <b id="mi"></b>&nbsp;:&nbsp;
    <b id="sc"></b>

    <br><br><hr><br><br>
    <span>4. Create an HTML page having content as Hello world and a button named Replace Text.
     When user will click on this button page content should be changed to "Welcome to Elevation academy"
    </span><br>
    <h2 id="02">HELLO WORLD</h2>
    <button onclick="txtchnge()">click here</button>

    <br><br><hr><br><br>
    <span>5. Create an HTML page having content as Hello world and 
        a button named "Hide Text." When user will click on this button hide the "Hello World" text
    </span><br>
    <h3>HELLO WORLD</h3>
    <button onclick="hide()">click here</button>


    <br><br><hr><br><br>
    <span>6. Given an array of 0's and 1's find out number of 0's</span>


    <br><br><hr><br><br>
    <span>7. Given an array find out total no. of odd and even nos.</span>


    <br><br><hr><br><br>
    <span>8. Given a string find out number of vowels </span>


    <br><br><hr><br><br>
    <span>9. Write a code to create two objects with 2 properties each, one will be string and other will be an array. 
        Create a function to check if all the elements of the arrays in both the objects are same</span>

    
    


    <script>


function changeText(){
    let mern=document.createElement('h1')
    let box=document.getElementById("01")
    box.appendChild(mern)
    mern.innerText="MERN STACK"
}

let fh1=document.getElementsByTagName("h1")
console.log(fh1[0])

function getTime(){
    let date=new Date()
    let hre = date.getHours()
    let mnt = date.getMinutes()
    let scnd = date.getSeconds()

    document.getElementById("hr").innerText=hre
    document.getElementById("mi").innerText=mnt
    document.getElementById("sc").innerText=scnd

    setTimeout(getTime,1000);
}
getTime()

function txtchnge(){
    let a=document.getElementById('02')
    a.innerText="Welcome to Elevation academy"
}

function hide(){
    let b=document.getElementsByTagName('h3')
    b[0].style.visibility="hidden"
}


let arr1=[1,1,1,0,1,0,1,0,0,0,0]
let count1=0;
for(let i=0;i<arr1.length;i++){
    if(arr1[i]==0){
        count1++
    }
}
console.log("count of zeros in given array is = "+count1)


let arr2=[11,12,15,164,13,158,14,21,19]
let odd=0;
let even=0;
for(let i=0; i<arr2.length; i++){
    if(arr2[i]%2==0){
        even++;
    }else{
        odd++
    }
}
console.log("number of odd numbers in given array is = "+odd+" ; "+"number of even numbers in given array is = "+even)


let str="sanjay"
let count3=0;
for(let i=0; i<str.length; i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||
        str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U"){
            count3++
        }
}
console.log("count of vowels on the given string is = "+count3);


let obj1={
    name: "sanjay",
    arr1: [0,1,2,3,4]
}
let obj2={
    name: "rahul",
    arr1: [0,1,3,4]
}
if(obj1.name == obj2.name){
    var stringOfObjects = 1;
}else{
    var stringOfObjects = 0;
}
if(obj1.arr1 == obj2.arr1){
    var arrayOfObjects = 1;
}else{
    var arrayOfObjects = 0;
}
if(stringOfObjects==1 && arrayOfObjects==1 )
{
    console.log("its same")
}else{
    console.log("its not same")
}





    </script>
</body>
</html>
