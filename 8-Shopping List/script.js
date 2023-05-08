const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e){
    e.preventDefault();
    const newItem = itemInput.value;
    if(newItem ===''){
        alert('Please add an item');
        return;
    }
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    const button = createButton('remove-item btn-link text-red');
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    
}

itemForm.addEventListener('submit',addItem);