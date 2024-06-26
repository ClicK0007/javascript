document.getElementById("title");
//  <h1  id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">test text</span></h1>

document.getElementById("title").id
// 'title'

document.getElementById("title").class
// undefined

document.getElementById("title").className
// 'heading'

document.getElementById("title").getAttribute
// ƒ getAttribute() { [native code] }

document.getElementById("title").getAttribute('id')  // You have to always send the key to get value
// 'title'

document.getElementById("title").setAttribute('class', 'test') // THESE WILL OVERRIDE THE CURRENT CLASSES 'heading' and set new class 'test'
// undefined

document.getElementById("title").setAttribute('class', 'test heading') // To set both 'test heading'
// undefined

const title = document.getElementById("title")
title.style.backgroundColor = 'green'
title.style.padding = '15px'

// ------------------------------Interesting--------------------------------------

title.textContent // if you hide something with css still textContent will show the content like here 'test text' display property is set to none still it is getting that value
// DOM learning on Chai aur code test text

title.innerText
// DOM learning on Chai aur code

title.innerHTML 
// DOM learning on Chai aur code <span style="display: none;">test text</span>

// TO CHANGE
title.innerText = "hi"
// hi

// --------------------------------------------------------------------------------

document.querySelector('h2') // gives first h1 tag
// <h2>Lorem ipsum dolor sit.</h2>

document.querySelector('#title') 
//   <h1  id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">test text</span></h1>

document.querySelector('.heading') 
//   <h1  id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">test text</span></h1>

document.querySelector('input[type="password"]') // IF NO VALUE GET THEN 'null''

// ===============================================================================================

// You cannot loop through HTMLCollection as there is no such method in prototype
let divs = document.getElementsByTagName('div'); // HTMLCollection
let divArray = Array.from(divs); // Convert to Array
divArray.forEach(div => console.log(div)); // Now we can use Array methods
// These methods also returns htmlCollection
let radios = document.getElementsByName('gender'); // HTMLCollection
let items = document.getElementsByClassName('item'); // HTMLCollection



// You can loop through nodelist as there is forEach method in it's prototype(See in Browser)
let paragraphs = document.querySelectorAll('p'); // NodeList
let paragraphArray = [...paragraphs]; // Convert to Array
paragraphArray.forEach(p => console.log(p.textContent)); // Now we can use Array methods

/*
HTMLCollection: A live collection of HTML elements, limited to element nodes. 
NodeList: A collection of nodes, can be live or static, more general than HTMLCollection.
Array: A general-purpose collection in JavaScript, not live, with extensive methods for manipulation.
*/ 

