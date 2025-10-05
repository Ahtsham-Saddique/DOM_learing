
let button = document.createElement("button");
button.type="Submit";
console.log("Adding new element");
button.innerText="CLick  me";
console.log(button.innerText);

button.style.backgroundColor="red";
button.style.color="white";



let body =document.querySelector('body');
body.prepend(button);
let button1 = document.createElement("button");
// button1.type="Submit";

button1.innerText="CLick append me";


let div1= document.getElementsByClassName('box');
div1[0].after(button1);

let headd = document.querySelector('h2');
headd.remove();

let newh1 = document.createElement("h1");
newh1.innerText="This is my new heading";

div1[0].before(newh1);

let T_head=document.createElement("h1");
T_head.innerText='This is the top heading ';

button.after(T_head);

