
let h1 = document.createElement ("h1")
h1.innerHTML = "Lab7 Assignment"
h1.style.color = "blue"
document.body.appendChild (h1)


let h2 = document.createElement ("h2")
h2.innerHTML = "Task"
h2.style.color = "red"
document.body.appendChild (h2)

let p1 = document.createElement ("p1")
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild (p1)



let ul = document.createElement("ul");

let li1 = document.createElement("li");
li1.innerText = "find elements in the DOM (5 points);";
li1.style.color = "green"
li1.style.fontWeight = "900";


let li2 = document.createElement("li");
li2.innerText = "create/add/remove elements (5 points);";
li2.style.color = "purple"


let li3 = document.createElement("li");
li3.innerText = "change content of the elements (5 points);";
li3.style.color = "green"

let li4 = document.createElement("li");
li4.innerText = "change styles of the elements (5 points);";
li4.style.color = "purple"

let li5 = document.createElement("li");
li5.innerText = "change attributes of the elements (5 points);";
li5.style.color = "green"

let li6 = document.createElement("li");
li6.innerText = "change classes of the elements (5 points).";
li6.style.color = "purple"


ul.append(li1, li2, li3, li4, li5, li6);

document.body.appendChild(ul);


let h3 = document.createElement ("h2")
h3.innerHTML = "Submission"
h3.style.color = "red"
document.body.appendChild (h3)

let p2 = document.createElement ("p1")
p2.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild (p2)


let ul2 = document.createElement("ul");
let li7 = document.createElement("li");
li7.innerText = "Create a new repository on Github, named lab7 (1 point).";
li7.style.color = "green"



let li8 = document.createElement("li");
li8.innerText = "Clone this repository to your local machine and work inside it.";
li8.style.color = "purple"

let li9 = document.createElement("li");
li9.innerText = "Create a new HTML file, called index.html, which has only one <h1> tag with Hello, World! message (1 point).";
li9.style.color = "green"

let li10 = document.createElement("li");
li10.innerText = "Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).";
li10.style.color = "purple"

let li11 = document.createElement("li");
li11.innerText = "Link this main.js file to your index.html file (Note: place your script at the end of the body section).";
li11.style.color = "green"

let li12 = document.createElement("li");
li12.innerText = "Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).";
li12.style.color = "purple"

let li13 = document.createElement("li");
li13.innerText = "After you finish your work, submit it to the Github (2 points).";
li13.style.color = "green"



ul2.append(li7,li8,li9,li10,li11,li12,li13);
document.body.appendChild(ul2);
























const element = document.getElementById("hello");
  element.remove();




