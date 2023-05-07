//  1-EventListener

// function onClear(){
//     alert('Clear All element');
// }
// const clearBtn = document.querySelector('#btn-1');
// clearBtn.onClick = function(){
//     alert('Clear Item');

// }


// clearBtn.addEventListener('click',function(){
//     alert("All Clear");
// });

//both are same

// clearBtn.addEventListener('click',()=>{
//     alert("All Clear");
// });
// clearBtn.addEventListener('click',onClear);
// setTimeout(()=> clearBtn.removeEventListener('click',onClear()),5000);
// setTimeout(()=>clearBtn.click(),5000);

//   2-Mouse Events
// const logo = document.querySelector('.img');
// const onClick = ()=>{
//     // document.body.style.backgroundColor='purple';
//    if (document.body.style.backgroundColor !=='purple') {
//        document.body.style.backgroundColor='purple';
//        document.body.style.color = 'white';
//    }else{
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black'
//    }
// }
// const onRightClick = ()=> console.log('Right click event');
// const onMouseDown = ()=> console.log('Mouse down event');
// const onMouseUp = ()=> console.log('Mouse up event');
// const onMouseWheel = ()=> console.log('Mouse Wheel event');
// const onMouseOver = ()=> console.log('Mouse over event');
// const onMouseOut = ()=> console.log('Mouse out event');
// const onDragStart = ()=> console.log('Drag start event');

// logo.addEventListener('click',onClick);
// logo.addEventListener('dblclick',onClick);
// logo.addEventListener('contextmenu',onRightClick);
// logo.addEventListener('mousedown',onMouseDown);
// logo.addEventListener('mouseup',onMouseUp);
// logo.addEventListener('wheel',onMouseWheel);
// logo.addEventListener('mouseover',onMouseOver);
// logo.addEventListener('mouseout',onMouseOut);
// logo.addEventListener('dragstart',onDragStart);

// 3- Event Object

// function onClick(e){
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(e.type);
//     console.log(e.timeStamp);
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(e.offsetX);
//     console.log(e.offsetY);
//     console.log(e.pageX);
//     console.log(e.pageY);
//     console.log(e.screenX);
//     console.log(e.screenY);

// }
// logo.addEventListener('click',onClick);
// document.querySelector('a').addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log("Link Was Clicked");

// });
// function onDrag(e){
//     document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
// }
// logo.addEventListener('drag',onDrag);


// 4 - KeyBoard Event

// const input = document.querySelector('input');
// const onKeyPress = e=>{
//     const h1 = document.querySelector('h1');
//     h1.append(e.key);
// }
// const onKeyDown = e=>{
//     console.log('Press Down');
// }
// const onKeyUp = e=>{
//     console.log('Press Up');
// }

// input.addEventListener('keypress',onKeyPress);
// input.addEventListener('keydown',onKeyDown);
// input.addEventListener('keyup',onKeyUp);

//challenges

// const con = document.querySelector('h2');
// const col1 = document.querySelector('.col')


// window.addEventListener('keydown',()=>{
//     const insert = document.getElementsByClassName('col-1');

// });

// con.addEventListener('keypress',onKeyPress);

// input Event
const itemInput= document.querySelector('.form-input');
const priorityInput = document.querySelector('#priority-input');
const checkbox = document.querySelector('#checkbox');
const head = document.querySelector('h2');


itemInput.addEventListener('input',(e)=>{
    // console.log(e.target.value);
    head.textContent = e.target.key;
});
priorityInput.addEventListener('input',(e)=>{
    head.textContent = e.target.value;
});


