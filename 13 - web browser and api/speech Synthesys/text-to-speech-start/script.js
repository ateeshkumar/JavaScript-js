const synth = window.speechSynthesis;

function onSubmit(e){
    e.preventDefault();
    const textInput = document.getElementById('text-input');
    console.log(textInput.value);
    const uttran = new SpeechSynthesisUtterance(textInput.value);
    synth.speak(uttran);
}


document.getElementById('form').addEventListener('submit',onSubmit);