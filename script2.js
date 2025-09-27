let boxes = document.getElementsByClassName("box"); 

// // Convert collection to array to use forEach
// Array.from(boxes).forEach((box) => {
//   console.dir(box.innerText);
// });

// boxes[0].innerText="This is !@st box";
// boxes[1].innerText="This is !@st box";
// boxes[2].innerText="This is !@st box";
ind=1;
for(box of boxes)
{
    box.innerText =`THis is unique box of index ${ind}`;
    ind++;
}
  