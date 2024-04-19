
// const element = document.getElementById("mainWrapper");
// const elementByClassName = document.getElementsByClassName("imageWrapper");
// const elementByTagName = document.getElementsByTagName("div");

// const usingQuery = document.querySelector(".paragraph")
// const usingQueryId = document.querySelector("#paraId")
// const querySelAll = document.querySelectorAll(".paragraph")

// console.log(querySelAll, "<==Class");
// console.log(usingQueryId, "<==ID");

//Reading or Targetting
//innerText
//innerHTML
//getAttribute
//getAttributesNode
//attributes

// const usingQueryId = document.querySelector("#paraId").innerText;
// const usingQueryId = document.querySelector("#paraId").innerHTML;
// const usingQueryId = document.querySelector("#paraId").getAttribute("id");
// const usingQueryId = document.querySelector("#paraId").getAttributeNode("id").value;
// const usingQueryId = document.querySelector("#paraId").getAttributeNode("id").name;
// const usingQueryId = document.querySelector("#paraId").attributes;

// console.log(usingQueryId);

// const bag = "Hello World";

//Manupulating
//innerText
//innerHTML
//setAttribute
//removeAttribute

// const newElement = document.querySelector(".changeText");
// newElement.innerText = "Hello World";
// console.log(newElement);

// const newElement = document.querySelector(".imageWrapper");
// newElement.innerHTML = " <h1>Hello World</h1>";
// console.log(newElement);

//14-04-2024

// removeAttribute

//working example
// const element = document.querySelector(".Child1");
// element.removeAttribute("id");
// console.log(element);

// const element = document.getElementById("elementOne");
// element.removeAttribute("class");
// console.log(element);


// const element = document.getElementsByClassName("Child1")[0];
// element.removeAttribute("id");
// console.log(element);

// ==============manupulating the STYLE===============


// STYLE

// const element = document.querySelector(".Child1");
// element.style.backgroundColor = "red";
// console.log(element);

//className

// const element = document.querySelector(".Child1");
// element.className += " bgRed";
// console.log(element);

//classList
// add, remove, toggle, contains, items, length

// const element1 = document.querySelector(".Child1").classList.toggle("bgRed");


//contains
// const element = document.querySelector(".Child1").classList.contains("bgRed");

// if(element){
//     console.log("TURERE");
// }else{
//     console.log("falseeeee");
// }

// console.log(element);

// ===========15-04-2024=====================

//Traversal Method
//parentElement

// const element1 = document.querySelector(".childBox").parentElement;
// const element = document.body.parentElement;
// console.log(element1);


//parentNode
// const element = document.querySelector("#koko").parentNode;
// const element = document.body.parentElement;
// console.log(element);

//children
// const element = document.querySelector(".childBox").children[0];
// element.innerText = "Mohan"
// const element = document.body.parentElement;
// console.log(element);

//childNodes
// const element = document.querySelector(".childBox").childNodes;
// console.log(element);

//firstElementChild
// const element = document.querySelector(".childBox").firstElementChild;
// const element = document.querySelector(".parentBox").firstElementChild;
// console.log(element);

//lastElementChild
// const element = document.querySelector(".childBox").lastElementChild; 
// console.log(element);

//firstChild
// const element = document.querySelector(".childBox").firstChild; 
// console.log(element);

//lastChild
// const element = document.querySelector(".childBox").lastChild; 
// console.log(element);


//nextElementSibling

// const element = document.querySelector(".Child3").nextElementSibling;
// element.style.background = "red";
// console.log(element);

//previousElementSibling
// const element = document.querySelector(".Child3").previousElementSibling;
// element.style.background = "red";
// console.log(element);

//nextSibling
// const element = document.querySelector(".Child3").nextSibling;
// element.style.background = "red";
// console.log(element);

//previousSibling

// =========16-04-2024====================

//createElement
//createTextNode
//createComment
// append
//insertBefore


// const targetElement = document.querySelector(".childBox");
// console.log(targetElement.children[0]);
// const newElement = document.createElement("span");
// const newText = document.createTextNode("Heelo World");
// const createComment = document.createComment("This is a comment")

// newElement.append(newText);
// targetElement.append(newElement);
// targetElement.insertBefore(newElement,targetElement.children[1]);
// console.log(newElement);


//insertAdjacentElement
// const newElement = document.createElement("p");
// const newText = document.createTextNode("Heelo World");
// newElement.textContent = "Hello worldd";

// const targetElement = document.querySelector(".wrapper");
// targetElement.insertAdjacentElement("beforebegin",newElement)
// newElement.append(newText);

// targetElement.insertAdjacentElement("beforebegin",newElement)
// targetElement.insertAdjacentElement("afterbegin",newElement)
// targetElement.insertAdjacentElement("beforeend",newElement)
// targetElement.insertAdjacentElement("afterend",newElement)

// console.log(newElement);

// ================18-04-2024===========================

 //insertAdjacentHTML

// const targetElement = document.querySelector(".wrapper");
// const htmlContent = "<div><p>Mohan</p></div>"
// targetElement.insertAdjacentHTML("beforebegin", htmlContent)
// console.log(targetElement);


//insertAdjacentText

// const body = document.body;
// const targetElement = document.querySelector(".wrapper");
// const simpleText = "Mohan"
// targetElement.insertAdjacentText("beforebegin", simpleText)
// // // console.log(targetElement);
// console.log(body);

//replaceChild
//removeChild

// const newChild = document.createElement('h1');
// const text = document.createTextNode("This is new Text");
// newChild.append(text);
// const parentElement = document.querySelector(".parent");
// const targetedChild = parentElement.children[0];
// parentElement.replaceChild(newChild, targetedChild)
// console.log(targetedChild);

//removeChild

// const parentElement = document.querySelector(".parent");
// const targetedChild = parentElement.children[0];
// parentElement.removeChild(targetedChild);
// console.log(targetedChild);

//hasAttribute 
//hasChildNodes boolean => true, false

// const parentElement = document.querySelector(".parent");
// const checkAttribute = parentElement.hasAttribute("style");
// console.log(checkAttribute);

// hasChildNodes
// const parentElement = document.querySelector(".para");
// const checkAttribute = parentElement.hasChildNodes();
// console.log(checkAttribute);

// contains
// const parentElement = document.querySelector(".parent");
// const findWrapper = document.querySelector(".wrapper");
// const checkResult = parentElement.contains(findWrapper);
// console.log(checkResult);

// ===========EVENT=========

// const btnElement = document.querySelector("#btn-click");

// // btnElement.addEventListener("click", printSomething, useCapture )
// btnElement.addEventListener("click", printSomething )

// function printSomething(){
//     console.log("printSomething");
// }
// console.log(btnElement);


//Mouse
// click
// doubleClick
// mousedown
// mouseup
// mouseenter
// mouseleave
// mouvemove
// mouseover
// mouseout

// keyboard
//keypress
//keydown
//keyup

// const inputElement = document.querySelector("#inputField");

// inputElement.addEventListener("keypress", printSomething )

// function printSomething(event){
//     console.log(event.target.id);
// }
// console.log(btnElement);

//scroll

// const textElement = document.querySelector(".wrapper");

// textElement.addEventListener("scroll", printSomething )

// function printSomething(){
//     console.log("Scroll is triggered");
// }

const myBatchStudent = [
    "Neha", "Pranali", "Sandhya", "Minakshi", "Pavani", "Nasrina","Nasir"
];


const showName = document.querySelector(".studentName");
const btn = document.querySelector(".btn");

btn.addEventListener("click", selectStudent);

function selectStudent(){
    const randomIndex = Math.floor(Math.random() * myBatchStudent.length);
    const randomName = myBatchStudent[randomIndex]
    // console.log(randomName);
    showName.textContent = randomName
}
