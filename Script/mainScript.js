function loadMainScreen()
{
    var body = document.getElementsByTagName('body');
    document.body.append(createHeader());
    document.body.append(createAudio());
}
function createHeader()
{
    var divCont = document.createElement('div');
    divCont.setAttribute('class','mainBanner');

    var row = document.createElement('div');
    //row.setAttribute('class','row');
    divCont.append(row);

    var col1 = document.createElement('div');
    col1.setAttribute('class','mainHeading');
    
    var img = "<a onclick="+"togglePlay()>"+"<img style="+"color:'white';"+" src="+"Images/volume.png"+" height = 40px></a>";
    var btn = "<button type="+"button" +"onclick="+"startGame()" +"value="+"btnStart"+">Start Game</button>";
    var count = 300;
    col1.innerHTML = 
    `<table style="width:100%">
        <th>User : `+getUsername()+` </th>
        <th>Time Remaining</th>
        <th> Music</th>
         
        <tr>
            <td id ="timeRemaining">
                hello
            </td>
            <td>
                `+ btn +`
            </td>
            <td>
                `+img +`
            </td>
        </tr>
    </table>`;
    
      
    var count = 5;
    setInterval(function(){
        if(count == 0)
        {
            clearInterval(this);
            
        }
        document.getElementById('timeRemaining').innerHTML= "<br>Remaining Time " + count + " Seconds";
        count--;
    },1000);

    /*
    var col1 = document.createElement('div');
    col1.setAttribute('class','mainHeading');
    col1.innerHTML = "UserName : "+getUsername();
   
    var soundBar = document.createElement('div');
    soundBar.setAttribute('class','mainHeading soundBar');
    soundBar.innerHTML= "<br><br><a onclick="+"togglePlay()>"+"<img style="+"color:'white';"+" src="+"Images/volume.png"+" height = 40px></a>";

    var timeBar = document.createElement('div');
    timeBar.setAttribute('class','timeBar');
    
    
    */

    
    row.appendChild(col1);
    //row.appendChild(soundBar);
    //row.appendChild(timeBar);

    divCont.appendChild(row);
    return divCont;

}
 
function getUsername()
{
    var query = window.location.href;
    var para = query.split('=');
    const userName = para[1];
    return userName;
}

