//initilize the varibles
console.log("hi i am here")
let songIndex=0;
let audioElement=new Audio("songes/1.mp3");
let Mplay=document.getElementById("Mplay");
let mBackward=document.getElementById("mBackward");
let mForward=document.getElementById("mForward");
let myprogressbar=document.getElementById("myprogressbar");
let gifr=document.getElementById("gifr");
let gifl=document.getElementById("gifl");
let songitem=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songeName:"yanella ynella",filePath:"songes/1.mp3",coverPath:"cover1.jpg",duration:'4.18s',gif:"music.webp"},
    {songeName:"Barisu kannada",filePath:"songes/2.mp3",coverPath:"cover2.jpg", duration:'6.11s',gif:"music.webp"},
    {songeName:"vavado vavado",filePath:"songes/3.mp3",coverPath:"cover3.jpg",duration:'1.00s',gif:"music.webp"},
    {songeName:"bad boys",filePath:"songes/4.mp3",coverPath:"cover4.jpg",duration:'2.45s',gif:"music.webp"},
    {songeName:"bgm",filePath:"songes/5.mp3",coverPath:"cover5.jpg",duration:'2.25s',gif:"music.webp"},
    {songeName:"bgms of great",filePath:"songes/6.mp3",coverPath:"cover6.jpg",duration:'9.58s',gif:"music.webp"},
    {songeName:"mari kannu",filePath:"songes/7.mp3",coverPath:"cover7.jpg",duration:'4.04s',gif:"music.webp"}
];
// intiating the values for song item
songitem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByClassName('songName')[0].innerText=songs[i].songeName;
    element.getElementsByClassName('duration')[0].innerText=songs[i].duration;
});
//initilizing the progress bar default
    myprogressbar.value=0;

// updating progress bar with current time of song
    audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
    if(audioElement.currentTime==audioElement.duration){
        Mplay.classList.remove('fa-circle-pause');
        Mplay.classList.add('fa-circle-play');
        gifr.style.opacity=0;
        gifl.style.opacity=0;
        myprogressbar=0;
    }
    
    });
    


//play pause
Mplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        Mplay.classList.remove('fa-circle-play');
        Mplay.classList.add('fa-circle-pause');
        gifr.style.opacity=1;
        gifl.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        Mplay.classList.add('fa-circle-play');
        Mplay.classList.remove('fa-circle-pause'); 
        gifr.style.opacity=0;
        gifl.style.opacity=0;
    }
    }); 
    //forward and backward
    mForward.addEventListener('click',()=>{
        if(songIndex < (songs.length)-1){
            songIndex+=1;  
        }
        else{
            songIndex=0;
        }
            audioElement.pause();
            audioElement=new Audio(songs[songIndex].filePath);
            audioElement.play();
            Mplay.classList.remove('fa-circle-play');
            Mplay.classList.add('fa-circle-pause');   
            gifr.style.opacity=1;
            gifl.style.opacity=1; 
    })

    mBackward.addEventListener('click',()=>{
        if(songIndex == 0){
        songIndex=songs.length-1;
        }
        else{
         songIndex-=1;
        }
        audioElement.pause();
        audioElement=new Audio(songs[songIndex].filePath);
        audioElement.play();
        Mplay.classList.remove('fa-circle-play');
        Mplay.classList.add('fa-circle-pause');
        gifr.style.opacity=1;
        gifl.style.opacity=1;  
    });

   
    
    // manual changing of progress bar 
    myprogressbar.addEventListener('change',()=>{
       audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
    });





