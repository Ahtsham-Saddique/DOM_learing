
let button = document.createElement("button");
button.type="Submit";
button.innerText="CLick  me";

button.style.backgroundColor="red";
button.style.color="white";



document.querySelector('body').prepend(button);

let pr =document.querySelector('p');

pr.setAttribute('class','newClass');

pr.classList.add('content');

pr.classList.remove('content');
pr.classList.add('content');

