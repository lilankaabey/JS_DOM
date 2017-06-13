var mainTitle = document.getElementById("mainTitle");

console.log("This is an element of type: ", mainTitle.nodeType);
console.log("the Inner HTML is ", mainTitle.innerHTML );
console.log("Child nodes: ", mainTitle.childNodes.length);

var myLinks = document.getElementsByTagName("a");
console.log("Links: ", myLinks.length);

//var mainContent = document.getElementById("mainContent");
//mainContent.setAttribute("align","right");

//var sidebar = document.getElementById("sidebar");
//console.log(sidebar.innerHTML);

//Create the element
var newHeading =  document.createElement("h1");
var newParagraph = document. createElement("p");

//to add content, either use innerHTML
newHeading.innerHTML = "Did you know?";
newParagraph.innerHTML = "Califonia produces over 17 millions gallons of wine each year!";

//and we still need to attach them to the document !
document.getElementById("trivia").appendChild(newHeading);
document.getElementById("trivia").appendChild(newParagraph);
