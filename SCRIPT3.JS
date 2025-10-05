let heading =document.querySelector("h2");


let h1=heading.getAttribute('class');
console.log("Before updating :")
console.log(h1);
heading.setAttribute('class',"newatt");

let up_value=heading.getAttribute('class');
console.log("After Updating :")
console.log(up_value);

let title = document.querySelector('title');
console.log("Before updating : ");

console.log(title.getAttribute('id'));

console.log("After updating :");
 title.setAttribute('id','123');
let idd =title.getAttribute('id')
console.log(idd);

let title_data=document.querySelector("title");
console.log("Before updating : ");
console.dir(title_data.innerText);

document.title="THis is new title";
console.log("After updating : ");
console.dir(document.title);
