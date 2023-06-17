const musicContainer = document.getElementById('music-container');
const plyaBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const porgressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const song = ['hey','summer','ukulele'];

let songIndex = 2;


loadSong(song[songIndex]);

function loadSong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function playSong(){
    musicContainer.classList.add('play');
    plyaBtn.querySelector('i.fas').classList.remove('fa-play');
    plyaBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();

}
function pauseSong(){
    musicContainer.classList.remove('play');
    plyaBtn.querySelector('i.fas').classList.add('fa-play');
    plyaBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

function prev(){
    songIndex--;
    if(songIndex<0){
        songIndex = song.length-1;
    }
    loadSong(song[songIndex]);
    playSong();
}

function next(){
    songIndex++;
    if(songIndex>song.length-1){
        songIndex = 0;
    }
    loadSong(song[songIndex]);
    playSong();
}

function updateProgress(e){  
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

}

function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX/width)*duration;
}

plyaBtn.addEventListener('click',()=>{
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
});



prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
audio.addEventListener('timeupdate',updateProgress);
porgressContainer.addEventListener('click',setProgress);