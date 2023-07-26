console.log(window);
console.dir(window.document);

console.log(document.body.innerHTML);
console.log(document.links[0]);
// document.body.innerHTML = "<h1>hello world</h1>"
document.write("Write from js");

console.log(document.getElementById('main'));
const main = document.getElementById('main');
// main.innerHTML = '<h1>Bibhu</h1>';
document.querySelector('#main h3').innerHTML='Ateesh kumar';
// console.log(main);
const x = document.querySelector('li:nth-child(2)');
x.innerText = 'Apple juice';
x.style.color = 'red';

const y = document.querySelector('ul');
console.log(y);
y.style.color='blue';

 const listItem = document.querySelectorAll('.item');
 console.log(listItem[1].innerText);
 listItem[1].style.color = 'blue';

//  listItem.forEach((item,index)=>{
//     item.style.color = 'red';
//     if (index==1) {
//         item.remove();
//     }

//  });

// Traversing The DOM

let output;
const parent = document.querySelector('.parant');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[2].className;
// output = parent.children[3].nodeName;

parent.children[1].innerText="Child two";
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText='Child One';
parent.lastElementChild.innerText='Child Last';

console.log(output);

// Create and Append element

const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-elements';
div.setAttribute('title','My Element');
console.log(div);

const text = document.createTextNode('Hello World');
div.appendChild(text);
document.body.appendChild(div);


//innerHTML and CreateElement difference
// Quick and Dirty
function createListItem(item){
    const li = document.createElement('li');
    li.innerHTML=`${item}`;
    document.querySelector('.ram').appendChild(li);
}

createListItem('Apple');


// clean and Performant
function createNewItem(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');
    button.className = 'remove-item';
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';
    button.appendChild(icon);
    li.appendChild(button);
    document.querySelector('.ram').appendChild(li);
}
createNewItem('Ateesh');

// Insert Text ,Html

function insertElement(){
    const main = document.querySelector('#main');
    const h1 = document.querySelector('h1');
    h1.textContent = 'Khub Bhaalo';
    main.insertAdjacentElement('befourbegin',h1);
}
insertElement();