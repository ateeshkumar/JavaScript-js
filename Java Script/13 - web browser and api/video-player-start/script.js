const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function playPause(){
    if(video.pause){
        video.play();
    }else{
        video.pause();
    }
}

function isStop(){
    video.pause();
    
}

function updateIcon(){
    if(video.play){
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }else{
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
}

play.addEventListener('click',playPause);
video.addEventListener('click',playPause);
video.addEventListener('click',updateIcon);
stop.addEventListener('click',isStop);