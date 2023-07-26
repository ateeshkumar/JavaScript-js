const audio = document.getElementById('audio')
const play = document.getElementById('play');
const pause = document.querySelector('pause');
const stop = document.querySelector('stop');
const currentTime = document.querySelector('current-time');
const valume = document.querySelector('valume');

play.addEventListener('click',()=>audio.play());
