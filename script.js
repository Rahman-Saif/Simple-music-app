const play=document.getElementById('play');
const music=document.querySelector('audio');
const img=document.querySelector('img');
const title=document.getElementById('title');
const artist=document.getElementById('artist');
const prev=document.getElementById('prev');
const next=document.getElementById('next');

const songs =[
    {
    name:'music-1',
    title:'tiktok',
    artist:'bollywood'
    },
    {
    name:'music-2',
    title:'youtube',
    artist:'lata '
    },
    {
    name:'music-3',
    title:'desi',
    artist:'russian'
    },
]

let isPlaying=false;
/* for playing functionality */

const playMusic= () => {
    isPlaying=true;
    music.play();
    
}

/* for pause functionality */

const pauseMusic= () => {
    isPlaying=false;
    music.pause();
    
}

play.addEventListener("click",()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
})

const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="music/"+songs.name+".mp3";
    img.src="images/"+songs.name+".jpg";
}

songIndex=0;

const prevSong=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}


const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong)
