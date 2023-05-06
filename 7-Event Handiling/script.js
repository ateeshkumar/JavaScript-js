//  1-EventListener

function onClear(){
    alert('Clear All element');
}
const clearBtn = document.querySelector('#btn-1');
clearBtn.onClick = function(){
    alert('Clear Item');

}


// clearBtn.addEventListener('click',function(){
//     alert("All Clear");
// });

//both are same

// clearBtn.addEventListener('click',()=>{
//     alert("All Clear");
// });
clearBtn.addEventListener('click',onClear);
// setTimeout(()=> clearBtn.removeEventListener('click',onClear()),5000);
// setTimeout(()=>clearBtn.click(),5000);

//   2-Mouse Events
const logo = document.querySelector('.img');
const onClick = ()=>{
    // document.body.style.backgroundColor='purple';
   if (document.body.style.backgroundColor !=='purple') {
       document.body.style.backgroundColor='purple';
       document.body.style.color = 'white';
   }else{
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black'
   }
}
const onRightClick = ()=> console.log('Right click event');
const onMouseDown = ()=> console.log('Mouse down event');
const onMouseUp = ()=> console.log('Mouse up event');
const onMouseWheel = ()=> console.log('Mouse Wheel event');
const onMouseOver = ()=> console.log('Mouse over event');
const onMouseOut = ()=> console.log('Mouse out event');
const onDragStart = ()=> console.log('Drag start event');

logo.addEventListener('click',onClick);
logo.addEventListener('dblclick',onClick);
logo.addEventListener('contextmenu',onRightClick);
logo.addEventListener('mousedown',onMouseDown);
logo.addEventListener('mouseup',onMouseUp);
logo.addEventListener('wheel',onMouseWheel);
logo.addEventListener('mouseover',onMouseOver);
logo.addEventListener('mouseout',onMouseOut);
logo.addEventListener('dragstart',onDragStart);

