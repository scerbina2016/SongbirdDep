import {default as birdsData} from '../modules/birdsArr.js';

const songHeader = document.getElementById("song-header-p1");
//const topFoto = document.getElementById("foto-in-action");
//const topAudio = document.getElementById("audio-in-action");

//topFoto.innerHTML='<img src='+birdsData[1][1].image+' alt="">';
//console.log('======================='+birdsData[1][1].image);



let soundHederCount=0;
let audio = new Audio();
    audio.src = '../songbird/assets/krasivye-zvuki-peniya-kanareiki.mp3';
//const songHederOn=document.getElementById("song-header-img");
// console.log(songHederOn);
 //document.getElementById("song-header-img").src ="../images/1_2830-128x128off.png";
//songHeader.innerHTML='<img class="song-header__image" id="song-header-img" src="../images/1_2830-128x128off.png" alt=""></img>';
 //songHeader.src="../images/1_2830-128x128off.png"
let winSizeOpen;
let winSizeClose;
function sound() {
    if(window.innerWidth<620){
        winSizeOpen='../songbird/images/1_2830-64x64.png';
        winSizeClose='../songbird/images/1_2830-64x64off.png';
    } else{
        winSizeOpen='../songbird/images/1_2830-128x128.png';
        winSizeClose='../songbird/images/1_2830-128x128off.png';

    }
    if(soundHederCount==0){
    soundHederCount=1;
    songHeader.innerHTML='<img class="song-header__image" id="song-header-img" src="'+winSizeClose+'" alt=""></img>';
    audio.play()} else {
    songHeader.innerHTML='<img class="song-header__image" id="song-header-img" src="'+winSizeOpen+'" alt=""></img>';   
    audio.pause();
    soundHederCount=0;
    };
}


songHeader.addEventListener('click',()=>{
    
       sound();
    
    
    
});

/*window.onload=function{
/*setTimeout(())

}*/
window.addEventListener('resize', () => { 
     let canvas = document.getElementById("song-header-img");
     console.log('========================='+canvas);
if(window.innerWidth<620){
    
    canvas.src  ="../songbird/images/1_2830-64x64.png";
    console.log(canvas)} 
    
    else if(window.innerWidth>620){
        canvas.src  ="../songbird/images/1_2830-128x128.png";  
    }

});