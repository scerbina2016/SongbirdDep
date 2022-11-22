import {default as birdsData} from '../modules/birdsArr.js';

const songHeader = document.getElementById("song-header-p1");
let topFoto = document.getElementById("foto-in-action");
let topAudio = document.getElementById("audio-in-action");
let choiseBird = document.getElementById("field-choice-birds");
let descrFoto = document.getElementById("description-foto");
let descrName = document.getElementById("description-name");
let descrLatin = document.getElementById("description-latin");
let descrSound = document.getElementById("description-sound");
let descrDes = document.getElementById("description-des");
let nextLevel = document.getElementById("next-level");
let oneBird = document.getElementById('one-bird');
let twoBird = document.getElementById('two-bird');
let threeBird = document.getElementById('three-bird');
let fourBird = document.getElementById('four-bird');
let fiveBird = document.getElementById('five-bird');
let sixBird = document.getElementById('six-bird');
let scoresFild = document.getElementById('batley-scores-value');
let winWin = document.getElementById('you-win');
let playContrTop = document.getElementById('play-contr-top');
let winBird = document.getElementById('play-length-top');
let volPlus = document.getElementById('play-vol-plus');
let volMinus = document.getElementById('play-vol-minus');

let volIndicat = document.getElementById('play-vol-top');
volIndicat.style = `grid-column: 8/10;
                        grid-row: 16/17;
                        background-color: #0a470e;`

let audioTopFlag=0;

let gameScores=0;
let gameScoresPen=0;
let trueBird;
let blockCount = 0;
let inBlockCount = 0;
let winSong = new Audio();
    winSong.src = '../songbird/assets/krasivye-zvuki-peniya-kanareiki.mp3';

let audioWin = new Audio();
    audioWin.src = '../songbird/audio/jg-032316-sfx-elearning-correct-answer-sound-3.mp3';
let audioWrong = new Audio();
    audioWrong.src = '../songbird/audio/zvukovoy-effekt-nepravilnogo-otveta-wrong-buzzer-sound-effect.mp3';
let audioTop = new Audio();
    audioTop.loop = true;
    audioTop.volume = 0.2;
 playContrTop.style.backgroundImage = "url('../songbird/images/play.png')";



 let oneBut = document.getElementById('razminka');
let twoBut = document.getElementById('voroby');
let threeBut = document.getElementById('forest');
let fourBut = document.getElementById('singing');
let fiveBut = document.getElementById('predator');
let sixBut = document.getElementById('sea');




//=================================== Func bloc================================

let colorBut = () => {
    switch ( blockCount ) {
        case 0:
            oneBut.style.backgroundColor = 'rgb(49, 138, 55)';//*
            twoBut.style.backgroundColor = 'rgb(10, 71, 14)';
            threeBut.style.backgroundColor = 'rgb(10, 71, 14)';
            fourBut.style.backgroundColor = 'rgb(10, 71, 14)';
            fiveBut.style.backgroundColor = 'rgb(10, 71, 14)';
            sixBut.style.backgroundColor = 'rgb(10, 71, 14)';
        break;
        case 1:
            oneBut.style.backgroundColor = 'rgb(10, 71, 14)';
            twoBut.style.backgroundColor = 'rgb(49, 138, 55)';//*
            threeBut.style.backgroundColor = 'rgb(10, 71, 14)';
            fourBut.style.backgroundColor = 'rgb(10, 71, 14)';
            fiveBut.style.backgroundColor = 'rgb(10, 71, 14)';
            sixBut.style.backgroundColor = 'rgb(10, 71, 14)';
        break;
        case 2:
            oneBut.style.backgroundColor = 'rgb(10, 71, 14)';
            twoBut.style.backgroundColor = 'rgb(10, 71, 14)';
            threeBut.style.backgroundColor = 'rgb(49, 138, 55)';//*
            fourBut.style.backgroundColor = 'rgb(10, 71, 14)';
            fiveBut.style.backgroundColor = 'rgb(10, 71, 14)';
            sixBut.style.backgroundColor = 'rgb(10, 71, 14)';
        break;    
        case 3:
            oneBut.style.backgroundColor = 'rgb(10, 71, 14)';
            twoBut.style.backgroundColor = 'rgb(10, 71, 14)';
            threeBut.style.backgroundColor = 'rgb(10, 71, 14)';
            fourBut.style.backgroundColor = 'rgb(49, 138, 55)';//*
            fiveBut.style.backgroundColor = 'rgb(10, 71, 14)';
            sixBut.style.backgroundColor = 'rgb(10, 71, 14)';
        break;  
        case 4:
            oneBut.style.backgroundColor = 'rgb(10, 71, 14)';
            twoBut.style.backgroundColor = 'rgb(10, 71, 14)';
            threeBut.style.backgroundColor = 'rgb(10, 71, 14)';
            fourBut.style.backgroundColor = 'rgb(10, 71, 14)';
            fiveBut.style.backgroundColor = 'rgb(49, 138, 55)';//*
            sixBut.style.backgroundColor = 'rgb(10, 71, 14)';
        break;
        case 5:
            oneBut.style.backgroundColor = 'rgb(10, 71, 14)';
            twoBut.style.backgroundColor = 'rgb(10, 71, 14)';
            threeBut.style.backgroundColor = 'rgb(10, 71, 14)';
            fourBut.style.backgroundColor = 'rgb(10, 71, 14)';
            fiveBut.style.backgroundColor = 'rgb(10, 71, 14)';
            sixBut.style.backgroundColor = 'rgb(49, 138, 55)';//*
        break;   
        default:
            break;
    }
}


function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

let shift = () => {
    
    descrName.innerHTML="Выбери птицу из списка";
    audioTop.src=birdsData[blockCount][inBlockCount].audio;
    oneBird.innerText = birdsData[blockCount][0].name;
    twoBird.innerText = birdsData[blockCount][1].name;
    threeBird.innerText = birdsData[blockCount][2].name;
    fourBird.innerText = birdsData[blockCount][3].name;
    fiveBird.innerText = birdsData[blockCount][4].name;
    sixBird.innerText = birdsData[blockCount][5].name;
    
    };

let begin = () => {
    colorBut();//=====================================================================
    window.onload= function () {
    topFoto.style.backgroundImage="url('../songbird/images/bird06a46938.jpg')";
    winBird.innerText='?????????';
    descrName.innerHTML="Выбери птицу из списка"; 
    inBlockCount=randomInteger(0, 5);
    trueBird=birdsData[blockCount][inBlockCount];
console.log('random begin => '+inBlockCount);
console.log(trueBird.name);
    oneBird.innerText = birdsData[blockCount][0].name;
     twoBird.innerText = birdsData[blockCount][1].name;
     threeBird.innerText = birdsData[blockCount][2].name;
     fourBird.innerText = birdsData[blockCount][3].name;
     fiveBird.innerText = birdsData[blockCount][4].name;
     sixBird.innerText = birdsData[blockCount][5].name;
    audioTop.src=birdsData[blockCount][inBlockCount].audio;
    /*volIndicat.style = `grid-column: 10/16;
                        grid-row: 16/17;
                        background-color: #0a470e;`*/
    };
};

let fillDiscription = (point) => {
    descrFoto.style.backgroundImage="url('" + birdsData[blockCount][point].image + "')";
    descrName.innerHTML=birdsData[blockCount][point].name;
    descrLatin.innerHTML=birdsData[blockCount][point].species;
    descrDes.innerHTML=birdsData[blockCount][point].description;   
    
}
let birdSelected = (bird) => {

    console.log(' color => '+bird.style.color);
     if((bird.style.color=='rgb(10, 71, 14)')||(bird.style.color=='red')){
        console.log('!!!ooops!!!')
     } else {
    
    if(bird.innerText==trueBird.name){console.log("WIN!!!");
    //audioTop.pause();
    audioTopFlag=0;
    playContrTop.style.backgroundImage = "url('../songbird/images/play.png')";
     bird.style.color='#0a470e';
     topFoto.style.backgroundImage="url('" + trueBird.image + "')";
     winBird.innerText=trueBird.name; 
     audioTop.pause();
     audioWin.play();
     
    if(gameScores <= 0){gameScores=0;}
    gameScores +=5-gameScoresPen;
    scoresFild.innerText=gameScores  
} else {console.log("Ne win!!!");
gameScoresPen +=1;bird.style.color='red';
audioWrong.play();
};

}};

let birdNevList = () => {
    


  oneBird.style.color='white';
  twoBird.style.color='white';
  threeBird.style.color='white';
  fourBird.style.color='white';
  fiveBird.style.color='white';
  sixBird.style.color='white';
  descrFoto.style.backgroundImage="";
  descrName.innerHTML="Выбери птицу из списка";//birdsData[blockCount][inBlockCount].name;
console.log('nevList  ==>> '+descrName.innerHTML);
topFoto.style.backgroundImage="url('../songbird/images/bird06a46938.jpg')";
  descrLatin.innerHTML='';
  descrDes.innerHTML='';
  inBlockCount=randomInteger(0, 5);
    trueBird=birdsData[blockCount][inBlockCount];
console.log('random new list => '+inBlockCount);
console.log(trueBird.name);
  
  //trueBird=birdsData[blockCount][randomInteger(0, 5)];
  //trueBird=birdsData[blockCount][inBlockCount];
  
}

playContrTop.addEventListener('click',() => {
    
    console.log('playControlTop pressed => ', topAudio.paused)
    console.log('audioTop', audioTop.paused);
    if(audioTopFlag==0){
        audioTopFlag=1;
        playContrTop.style.backgroundImage = "url('../songbird/images/pause.png')";
        //songHeader.innerHTML='<img class="song-header__image" id="song-header-img" src="../songbird/images/1_2830-128x128off.png" alt=""></img>';
        audioTop.play()} else {

        playContrTop.style.backgroundImage = "url('../songbird/images/play.png')";
        audioTop.pause();
        audioTopFlag=0;
        };


});
let gridCol;
volPlus.addEventListener('click',() => {
    if(audioTop.volume <0.9){ audioTop.volume +=0.1;} else {audioTop.volume=audioTop.volume};

    console.log(audioTop.volume);  
    gridCol=(8+(audioTop.volume/0.1));
    if(gridCol>17){gridCol=17};
    if(gridCol<9){gridCol=9};
    volIndicat.style = `grid-column: 8/`+gridCol+`;
                        grid-row: 16/17;
                        background-color: #0a470e;`
    console.log(10+(audioTop.volume/0.1));
});

volMinus.addEventListener('click',() => {
    if(audioTop.volume >0.15){ audioTop.volume -=0.1;} else {audioTop.volume=audioTop.volume};
    console.log(audioTop.volume);  
    gridCol=(8+(audioTop.volume/0.1));
    if(gridCol>17){gridCol=17};
    if(gridCol<9){gridCol=9};

    volIndicat.style = `grid-column: 8/`+gridCol+`;
                        grid-row: 16/17;
                        background-color: #0a470e;`
    console.log(10+(audioTop.volume/0.1));
    
});



oneBird.addEventListener('click',() => {fillDiscription(0);birdSelected(oneBird);});
twoBird.addEventListener('click',() => {fillDiscription(1);birdSelected(twoBird);});
threeBird.addEventListener('click',() => {fillDiscription(2);birdSelected(threeBird);});
fourBird.addEventListener('click',() => {fillDiscription(3);birdSelected(fourBird);});
fiveBird.addEventListener('click',() => {fillDiscription(4);birdSelected(fiveBird);});
sixBird.addEventListener('click',() => {fillDiscription(5);birdSelected(sixBird);});

let birdOnce1 = () => {if(oneBirdAct==0){ fillDiscription(0);birdSelected(oneBird);oneBirdAct=1;}};










//=================================== End Func Bloc ==========================

begin();

nextLevel.addEventListener('click',() => {
    ++blockCount;
    colorBut();
    audioTopFlag=0;//*********************************************** */
    if(!audioTop.paused){console.log('audioTop', audioTop.paused);audioTop.pause()};
    console.log('nextLevel pressed  =>');
    console.log('audioTop', audioTop.paused);
    gameScoresPen=0;
    winBird.innerText='?????????';
    playContrTop.style.backgroundImage = "url('../songbird/images/play.png')";  
 if(blockCount > 5){ console.log('YOU WIN!!!!!!');
 winWin.style.display='block';
 winWin.style=`flex-direction: column;
 font-family: 'Pacifico', cursive;/*  font-family: 'Oleo Script', cursive;*/
   display: flex;
   font-size: 8vw;
   font-weight: 400;
   /*line-height: 22px;*/
   letter-spacing: 0em;
   text-align: center;
   text-decoration: none;
   color:#0a470e;`
 winWin.innerHTML=`<div class="win-list"> YOU WIN !!!!!!, you scores : `+gameScores+`</div>
 <div class="win-but-cont"><a class="win-but-repeat" href="letsfight.html">Еще разок</a> 
 <a class="win-but-begin" href="index.html">В начало</a></div>`;
 winSong.play();
 gameScores=0;
 blockCount=0;
 
};





 birdNevList();
 
 
 console.log('one bird  ===>>>  '+ oneBird.innerText+'blocCou => '+blockCount)
   shift();
   
});



