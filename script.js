// console.log(document.body.childNodes)

var firstEL = document.body.childNodes[3];
var secondEL = document.body.childNodes[5];
var thirdEL = document.body.childNodes[7];
var fourthEL = document.body.childNodes[12];
var fifthEL = document.body.childNodes[14];


setTimeout(rem1,2000);
function rem1 (){
    firstEL.remove(); 
};

setTimeout(rem2,4000);
function rem2 (){
    secondEL.remove(); 
};

setTimeout(rem3,6000);
function rem3 (){
    thirdEL.remove(); 
};

setTimeout(rem4,8000);
function rem4 (){
    fourthEL.remove(); 
};

setTimeout(rem5,10000);
function rem5 (){
    fifthEL.remove(); 
};

//first assignment ENDs HERE!

// var ul = document.body.childNodes[5];
// var li = document.createElement("li");
// var liContent = document.createTextNode("list 1");
// li.appendChild(liContent);
// ul.appendChild(li);

// // var ul = document.body.childNodes[5];
// var li = document.createElement("li");
// var liContent = document.createTextNode("list 2");
// li.appendChild(liContent);
// ul.appendChild(li);

// var li = document.createElement("li");
// var liContent = document.createTextNode("list 3");
// li.appendChild(liContent);
// ul.appendChild(li);

// var li = document.createElement("li");
// var liContent = document.createTextNode("list 4");
// li.appendChild(liContent);
// ul.appendChild(li);

// var li = document.createElement("li");
// var liContent = document.createTextNode("list 5");
// li.appendChild(liContent);
// ul.appendChild(li);

//Remove

// function rem1 (){
//     document.body.childNodes[5].childNodes[3].remove()
// };
// setTimeout(rem1,2000);
// setTimeout(rem1,4000);
// setTimeout(rem1,6000);
// setTimeout(rem1,8000);
// setTimeout(rem1,10000);

// function rem2 (){
//     document.body.childNodes[5].childNodes[4].remove()
// };
// setTimeout(rem2,4000);

// function rem3 (){
//     document.body.childNodes[5].childNodes[5].remove()
// };
// setTimeout(rem3,6000);

// function rem4 (){
//     document.body.childNodes[5].childNodes[6].remove()
// };
// setTimeout(rem4,8000);

// function rem5 (){
//     document.body.childNodes[5].childNodes[7].remove()
// };
// setTimeout(rem5,10000);

//second assignment ENDs HERE!


// var img = document.body.childNodes[13];

// console.log(img.attributes);
// console.log(img.attributes.src.value)

// // Third assignment ENDs HERE!

// var atr = document.body.childNodes[17];
// // console.log(atr)
// atr.setAttribute("height", "100px")

// // fourth assignment ENDs HERE!

// var lang =["HTML", "CSS", "Javacript"];

// for  (list of lang){
//     console.log(list)
// };

//fifth assignment ENDs HERE!


// var h2 = document.body.childNodes[23];
// h2.innerHTML = "innerHTML";
// //if you use <h1> in innerHTML then it is considered as a tag.
// var h3 = document.body.childNodes[25];
// h3.innerText = "innerText";
// //if you use <h1> and console then it prints as it is, not considering as a h1 tag
// var h3 = document.body.childNodes[27];
// h3.textContent = "textContent";
// //if we use textContent and console then it prints evry space you added in your content. whike innerHTML and innerText prints only one space no matter how many spaces are there in content.



