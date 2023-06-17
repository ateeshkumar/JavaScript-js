const SpeechRecognigation = 
    window.SpeechRecognigation || window.webkitSpeechRecognigation;

const rec = new SpeechRecognigation();
rec.lang = 'en-US';
rec.continuous = true;
rec.onresult = function(e){
    for(let i = e.resultIndex; i<e.results.length; i++){
        const script = e.results[i][0].transcript;
        console.log(script);
    }
};
rec.start();