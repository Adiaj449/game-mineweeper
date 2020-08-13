function displayPoster()
{
    var body = document.getElementsByTagName('body');
    document.body.append(createAudio());
    document.body.append(createPoster());
}
function createAudio()
{
    var audio = document.createElement('audio');
    audio.id = "myAudio";
    audio.src ="./Music/WelcomeTheme.mp3";
    audio.preload = "auto";
    return audio;
}

function togglePlay() {
    var myAudio = document.getElementById("myAudio");
    var isPlaying = false;
    if (isPlaying) {
        myAudio.pause()
    } else {
        myAudio.play();
    }
};
function createPoster()
{
    var div = document.createElement('div');
    div.setAttribute('class','posterBanner');
    
    
    var container = document.createElement('div');
    container.setAttribute('class','container background-set');
    
    var soundBar = document.createElement('div');
    soundBar.setAttribute('class','container soundBar');
    soundBar.innerHTML= "<a onclick="+"togglePlay()>"+"<img style="+"color:'white';"+" src="+"Images/volume.png"+"></a>";

    container.appendChild(soundBar);

    var row = document.createElement('div');
    //row.setAttribute('class','row');
    container.append(row);

    var col1 = document.createElement('div');
    col1.setAttribute('class','headingPoster');
    col1.innerHTML ="<form action="+"mainPage.html"+" method="+"get"+"><center><h1>Welcome to World of MinesWheeper</h1><label for="+"userName"+">Enter Usernme : </label> <input id="+"userName"+ " name ="+"userName"+"type="+"text"+"value="+"Enter"+"> <br> <br><button class = "+"btn"+" type="+"submit"+"value="+"PlayGame"+">Play Game</button></center></form>";

    var col2 = document.createElement('div');
    col2.setAttribute('class','headingPoster');
    col2.innerHTML ="";

    row.appendChild(col1);
    row.appendChild(col2);
    

    container.appendChild(row);
    return container;
}