let box = document.getElementsByClassName('box');
let i=1;
for (let b of box)
{
b.style.backgroundColor = 'red';
b.style.fontSize= "27px";
b.style.fontFamily="italic,bold,arial";
b.innerText="Theres a div a number"+i;
i++;
b.style.padding="10px";

b.style.textAlign="center";
// b.style.visibility="hidden";


}
