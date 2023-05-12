const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const remo = document.querySelector('remove-item');
const clearBtn = document.getElementById('clear');

const itemFilter = document.getElementById('filter');

function addItem(e){
    e.preventDefault();
    const newItem = itemInput.value;
    if(newItem ==''){
        alert('Please add an item');
        return;
    }
    addItemtoDOM(newItem);

    addItemtoStorage(newItem);
    checkUI();
    itemInput.value = ' ';
}
function addItemtoDOM(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    itemList.append(li);
}
function addItemtoStorage(item){
    let itemformStorege = [];
    if(localStorage.getItem('items')===null){
        itemformStorege;
    }else{
        itemformStorege = JSON.parse(localStorage.getItem('items'));
    }
    itemformStorege.push(item);
    localStorage.setItem('items',JSON.stringify(itemformStorege));
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
    
}
function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}
function removeItem(e){
    // console.log(e);
    if(e.target.parentElement.classList.contains('remove-item')){
        if(confirm('Are you sure??')){
            e.target.parentElement.parentElement.remove();
        }
        checkUI();
    }
}
function clearItem(){
    while(itemList.firstChild){
        
        itemList.removeChild(itemList.firstChild);

    }
    checkUI();
}
function checkUI(){
    const items = itemList.querySelectorAll('li');
    if(items.length===0){
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    }else{

        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}
function filterItem(e){
    const items = itemList.querySelectorAll('li');
    const ins = e.target.value.toLowerCase();
    items.forEach((item)=>{
        const itemName = item.firstChild.textContent.toLowerCase();
        // console.log(itemName);
        if(itemName.indexOf(ins)!=-1){
           item.style.display = 'flex'; 
        }else{
            item.style.display = 'none';
        }
    });
}


itemForm.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
clearBtn.addEventListener('click',clearItem);
itemFilter.addEventListener('input',filterItem);

checkUI();