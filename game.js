turn = 1
const pos = ["0px","50px","100px","150px","200px","250px","300px","350px","400px","450px"]; 

score1 = 0
score2 = 0

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.body.onkeyup = async function(e) 
{
    if (e.key == " " || e.code == "Space" || e.keyCode == 32 || e.key == "Enter") 
    {
        roll_dice()
        turn = turn + 1
    }
}

async function player1_blink()
{
    document.getElementById('player1_coin').style.animation = "blink infinite 0.5s";
    await sleep(1000);
    document.getElementById('player1_coin').style.animation = "none";
}

async function player2_blink()
{
    document.getElementById('player2_coin').style.animation = "blink infinite 0.5s";
    await sleep(1000);
    document.getElementById('player2_coin').style.animation = "none";
}

function mouse_clicked()
{
    roll_dice()
    turn = turn + 1
}

var pos1 = 0
var pos2 = 0

async function roll_dice()
{
    r = Math.floor(Math.random() * 6)
    r = r + 1

    move()

    if(r == 6){
        turn = turn - 1
    }
    else{
        turn%2 != 0?score1 = score1 + (pos1 * 2): score2 = score2 + (pos2 * 2);
        score_check() 
    }
    
    // check if on same block
    if(pos1 != pos2)
    {
        document.getElementById('player1_coin').style.padding = "10px"
        document.getElementById('player1_coin').style.margin = "5px 5px"
        document.getElementById('player2_coin').style.padding = "10px"
        document.getElementById('player2_coin').style.margin = "5px 5px"
    }
    else
    {
        document.getElementById('player1_coin').style.padding = "5px"
        document.getElementById('player1_coin').style.margin =  "3px 20px"
        document.getElementById('player2_coin').style.padding = "5px"
        document.getElementById('player2_coin').style.margin = "20px 3px"
    }
}

function score_check()
{
   

    document.getElementById('score1').innerHTML = score1;
    document.getElementById('score2').innerHTML = score2;
}

function change_dice1()
{
    if(r == 1){
        document.getElementById("dice_img").style.backgroundImage =  "url('images/1.png')"
    }
    else if(r == 2)
    {
        document.getElementById("dice_img").style.backgroundImage =  "url('images/2.png')"
    }
    else if(r == 3)
    {
        document.getElementById("dice_img").style.backgroundImage =  "url('images/3.png')"
    }
    else if(r == 4)
    {
        document.getElementById("dice_img").style.backgroundImage =  "url('images/4.png')"
    }
    else if(r == 5)
    {
        document.getElementById("dice_img").style.backgroundImage =  "url('images/5.png')"
    }
    else if(r == 6)
    {
        document.getElementById("dice_img").style.backgroundImage =  "url('images/6.png')"
    }
}

function change_dice2()
{
    if(r == 1){
        document.getElementById("dice2_img").style.backgroundImage =  "url('images/1.png')"
    }
    else if(r == 2)
    {
        document.getElementById("dice2_img").style.backgroundImage =  "url('images/2.png')"
    }
    else if(r == 3)
    {
        document.getElementById("dice2_img").style.backgroundImage =  "url('images/3.png')"
    }
    else if(r == 4)
    {
        document.getElementById("dice2_img").style.backgroundImage =  "url('images/4.png')"
    }
    else if(r == 5)
    {
        document.getElementById("dice2_img").style.backgroundImage =  "url('images/5.png')"
    }
    else if(r == 6)
    {
        document.getElementById("dice2_img").style.backgroundImage =  "url('images/6.png')"
    }
}

async function check_win()
{
     // check Win
     if(pos1 == 100)
     {
         document.getElementById('message1').style.display = "block";

         await sleep(1000);

         document.getElementById('board').style.display = "none";

         await sleep(3000);

         location.reload();
     }
     else if(pos2 == 100)
     {
         document.getElementById('message2').style.display = "block";

         await sleep(1000);

         document.getElementById('board').style.display = "none";

         await sleep(3000);
         
         location.reload();
     }
}

function check_obj()
{
    if(pos1 == 4 || pos1 == 21 || pos1 == 29 || pos1 == 43 || pos1 == 63 || pos1 == 71)
    {
        score1 = score1 + 100
        player1_blink()
    }
    
    if(pos1 == 30 || pos1 == 47 || pos1 == 56 || pos1 == 73 || pos1 == 82 || pos1 == 92 || pos1 == 98)
    {
        score1 = score1 - 500
        player1_blink()
    }

    if(pos2 == 4 || pos2 == 21 || pos2 == 29 || pos2 == 43 || pos2 == 63 || pos2 == 71)
    {
        score2 = score2 + 100
        player2_blink()
    }
    
    if(pos2 == 30 || pos2 == 47 || pos2 == 56 || pos2 == 73 || pos2 == 82 || pos2 == 92 || pos2 == 98)
    {
        score2 = score2 - 500
        player2_blink()
    }


    if(pos1 == 4)
    {
        document.getElementById("player1").style.left = pos[4];
        document.getElementById("player1").style.top = pos[7];
        pos1 = 25
    }
    else if(pos1 == 21)
    {
        document.getElementById("player1").style.left = pos[1];
        document.getElementById("player1").style.top = pos[6];

        pos1 = 39
    }
    else if(pos1 == 29)
    {
        document.getElementById("player1").style.left = pos[6];
        document.getElementById("player1").style.top = pos[2];

        pos1 = 74
    }
    else if(pos1 == 30)
    {
        document.getElementById("player1").style.left = pos[6];
        document.getElementById("player1").style.top = pos[9];

        pos1 = 7
    }
    else if(pos1 == 43)
    {
        document.getElementById("player1").style.left = pos[4];
        document.getElementById("player1").style.top = pos[2];

        pos1 = 76
    }
    else if(pos1 == 47)
    {
        document.getElementById("player1").style.left = pos[5];
        document.getElementById("player1").style.top = pos[8];

        pos1 = 15
    }
    else if(pos1 == 56)
    {
        document.getElementById("player1").style.left = pos[1];
        document.getElementById("player1").style.top = pos[8];

        pos1 = 19
    }
    else if(pos1 == 63)
    {
        document.getElementById("player1").style.left = pos[0];
        document.getElementById("player1").style.top = pos[2];

        pos1 = 80
    }
    else if(pos1 == 71)
    {
        document.getElementById("player1").style.left = pos[8];
        document.getElementById("player1").style.top = pos[1];

        pos1 = 89
    }
    else if(pos1 == 73)
    {
        document.getElementById("player1").style.left = pos[9];
        document.getElementById("player1").style.top = pos[4];

        pos1 = 51
    }
    else if(pos1 == 82)
    {
        document.getElementById("player1").style.left = pos[1];
        document.getElementById("player1").style.top = pos[5];

        pos1 = 42
    }
    else if(pos1 == 92)
    {
        document.getElementById("player1").style.left = pos[5];
        document.getElementById("player1").style.top = pos[2];

        pos1 = 75
    }
    else if(pos1 == 98)
    {
        document.getElementById("player1").style.left = pos[5];
        document.getElementById("player1").style.top = pos[4];

        pos1 = 55
    }


    if(pos2 == 4)
    {
        document.getElementById("player2").style.left = pos[4];
        document.getElementById("player2").style.top = pos[7];

        pos2 = 25
    }
    else if(pos2 == 21)
    {
        document.getElementById("player2").style.left = pos[1];
        document.getElementById("player2").style.top = pos[6];
    
        pos2 = 39
    }
    else if(pos2 == 29)
    {
        document.getElementById("player2").style.left = pos[6];
        document.getElementById("player2").style.top = pos[2];
    
        pos2 = 74
    }
    else if(pos2 == 30)
    {
        document.getElementById("player2").style.left = pos[6];
        document.getElementById("player2").style.top = pos[9];
    
        pos2 = 7
    }
    else if(pos2 == 43)
    {
        document.getElementById("player2").style.left = pos[4];
        document.getElementById("player2").style.top = pos[2];
    
        pos2 = 76
    }
    else if(pos2 == 47)
    {
        document.getElementById("player2").style.left = pos[5];
        document.getElementById("player2").style.top = pos[8];
    
        pos2 = 15
    }
    else if(pos2 == 56)
    {
        document.getElementById("player2").style.left = pos[1];
        document.getElementById("player2").style.top = pos[8];
    
        pos2 = 19
    }
    else if(pos2 == 63)
    {
        document.getElementById("player2").style.left = pos[0];
        document.getElementById("player2").style.top = pos[2];
    
        pos2 = 80
    }
    else if(pos2 == 71)
    {
        document.getElementById("player2").style.left = pos[8];
        document.getElementById("player2").style.top = pos[1];
    
        pos2 = 89
    }
    else if(pos2 == 73)
    {
        document.getElementById("player2").style.left = pos[9];
        document.getElementById("player2").style.top = pos[4];
    
        pos2 = 51
    }
    else if(pos2 == 82)
    {
        document.getElementById("player2").style.left = pos[1];
        document.getElementById("player2").style.top = pos[5];
    
        pos2 = 42
    }
    else if(pos2 == 92)
    {
        document.getElementById("player2").style.left = pos[5];
        document.getElementById("player2").style.top = pos[2];
    
        pos2 = 75
    }
    else if(pos2 == 98)
    {
        document.getElementById("player2").style.left = pos[5];
        document.getElementById("player2").style.top = pos[4];
    
        pos2 = 55
    }

    score_check()
}

async function move()
{     
        // move coin
        if(turn%2 != 0)
        {            
            change_dice1()

            old_pos1 = pos1

            if(pos1 + r <= 100)
            {
                pos1 = pos1 + r
            }

            console.log(old_pos1)
            console.log(pos1)

            while(old_pos1 < pos1 + 1)
            {
                if(old_pos1 == 1)
                {
                    document.getElementById("player1").style.left = pos[0];
                    document.getElementById("player1").style.top = pos[9];
                }
                else if(old_pos1 == 2)
                {
                    document.getElementById("player1").style.left = pos[1];
                    document.getElementById("player1").style.top = pos[9];
                }
                else if(old_pos1 == 3)
                {
                    document.getElementById("player1").style.left = pos[2];
                    document.getElementById("player1").style.top = pos[9];
                }
                else if(old_pos1 == 4)
                {
                    document.getElementById("player1").style.left = pos[3];
                    document.getElementById("player1").style.top = pos[9];
                }
                else if(old_pos1 == 5)
                {
                    document.getElementById("player1").style.left = pos[4];
                    document.getElementById("player1").style.top = pos[9];
                }
                else if(old_pos1 == 6)
                {
                    document.getElementById("player1").style.left = pos[5];
                    document.getElementById("player1").style.top = pos[9];
                }
                else if(old_pos1 == 7)
                {
                    document.getElementById("player1").style.left = pos[6];
                    document.getElementById("player1").style.top = pos[9];
                }
                else if(old_pos1 == 8)
                {
                    document.getElementById("player1").style.left = pos[7];
                    document.getElementById("player1").style.top = pos[9];
                }
                else if(old_pos1 == 9)
                {
                    document.getElementById("player1").style.left = pos[8];
                    document.getElementById("player1").style.top = pos[9];
                }
                else if(old_pos1 == 10)
                {
                    document.getElementById("player1").style.left = pos[9];
                    document.getElementById("player1").style.top = pos[9];
                }
                else if(old_pos1 == 11)
                {
                    document.getElementById("player1").style.left = pos[9];
                    document.getElementById("player1").style.top = pos[8];
                }
                else if(old_pos1 == 12)
                {
                    document.getElementById("player1").style.left = pos[8];
                    document.getElementById("player1").style.top = pos[8];
                }
                else if(old_pos1 == 13)
                {
                    document.getElementById("player1").style.left = pos[7];
                    document.getElementById("player1").style.top = pos[8];
                }
                else if(old_pos1 == 14)
                {
                    document.getElementById("player1").style.left = pos[6];
                    document.getElementById("player1").style.top = pos[8];
                }
                else if(old_pos1 == 15)
                {
                    document.getElementById("player1").style.left = pos[5];
                    document.getElementById("player1").style.top = pos[8];
                }
                else if(old_pos1 == 16)
                {
                    document.getElementById("player1").style.left = pos[4];
                    document.getElementById("player1").style.top = pos[8];
                }
                else if(old_pos1 == 17)
                {
                    document.getElementById("player1").style.left = pos[3];
                    document.getElementById("player1").style.top = pos[8];
                }
                else if(old_pos1 == 18)
                {
                    document.getElementById("player1").style.left = pos[2];
                    document.getElementById("player1").style.top = pos[8];
                }
                else if(old_pos1 == 19)
                {
                    document.getElementById("player1").style.left = pos[1];
                    document.getElementById("player1").style.top = pos[8];
                }
                else if(old_pos1 == 20)
                {
                    document.getElementById("player1").style.left = pos[0];
                    document.getElementById("player1").style.top = pos[8];
                }
                else if(old_pos1 == 21)
                {
                    document.getElementById("player1").style.left = pos[0];
                    document.getElementById("player1").style.top = pos[7];
                   
                }
                else if(old_pos1 == 22)
                {
                    document.getElementById("player1").style.left = pos[1];
                    document.getElementById("player1").style.top = pos[7];
                }
                else if(old_pos1 == 23)
                {
                    document.getElementById("player1").style.left = pos[2];
                    document.getElementById("player1").style.top = pos[7];
                }
                else if(old_pos1 == 24)
                {
                    document.getElementById("player1").style.left = pos[3];
                    document.getElementById("player1").style.top = pos[7];
                }
                else if(old_pos1 == 25)
                {
                    document.getElementById("player1").style.left = pos[4];
                    document.getElementById("player1").style.top = pos[7];
                }
                else if(old_pos1 == 26)
                {
                    document.getElementById("player1").style.left = pos[5];
                    document.getElementById("player1").style.top = pos[7];
                }
                else if(old_pos1 == 27)
                {
                    document.getElementById("player1").style.left = pos[6];
                    document.getElementById("player1").style.top = pos[7];
                }
                else if(old_pos1 == 28)
                {
                    document.getElementById("player1").style.left = pos[7];
                    document.getElementById("player1").style.top = pos[7];
                }
                else if(old_pos1 == 29)
                {
                    document.getElementById("player1").style.left = pos[8];
                    document.getElementById("player1").style.top = pos[7];
                   
                }
                else if(old_pos1 == 30)
                {
                    document.getElementById("player1").style.left = pos[9];
                    document.getElementById("player1").style.top = pos[7];
                   
                }
                else if(old_pos1 == 31)
                {
                    document.getElementById("player1").style.left = pos[9];
                    document.getElementById("player1").style.top = pos[6];
                }
                else if(old_pos1 == 32)
                {
                    document.getElementById("player1").style.left = pos[8];
                    document.getElementById("player1").style.top = pos[6];
                }
                else if(old_pos1 == 33)
                {
                    document.getElementById("player1").style.left = pos[7];
                    document.getElementById("player1").style.top = pos[6];
                }
                else if(old_pos1 == 34)
                {
                    document.getElementById("player1").style.left = pos[6];
                    document.getElementById("player1").style.top = pos[6];
                }
                else if(old_pos1 == 35)
                {
                    document.getElementById("player1").style.left = pos[5];
                    document.getElementById("player1").style.top = pos[6];
                }
                else if(old_pos1 == 36)
                {
                    document.getElementById("player1").style.left = pos[4];
                    document.getElementById("player1").style.top = pos[6];
                }
                else if(old_pos1 == 37)
                {
                    document.getElementById("player1").style.left = pos[3];
                    document.getElementById("player1").style.top = pos[6];
                }
                else if(old_pos1 == 38)
                {
                    document.getElementById("player1").style.left = pos[2];
                    document.getElementById("player1").style.top = pos[6];
                }
                else if(old_pos1 == 39)
                {
                    document.getElementById("player1").style.left = pos[1];
                    document.getElementById("player1").style.top = pos[6];
                }
                else if(old_pos1 == 40)
                {
                    document.getElementById("player1").style.left = pos[0];
                    document.getElementById("player1").style.top = pos[6];
                }
                else if(old_pos1 == 41)
                {
                    document.getElementById("player1").style.left = pos[0];
                    document.getElementById("player1").style.top = pos[5];
                }
                else if(old_pos1 == 42)
                {
                    document.getElementById("player1").style.left = pos[1];
                    document.getElementById("player1").style.top = pos[5];
                }
                else if(old_pos1 == 43)
                {
                    document.getElementById("player1").style.left = pos[2];
                    document.getElementById("player1").style.top = pos[5];
                   
                }
                else if(old_pos1 == 44)
                {
                    document.getElementById("player1").style.left = pos[3];
                    document.getElementById("player1").style.top = pos[5];
                }
                else if(old_pos1 == 45)
                {
                    document.getElementById("player1").style.left = pos[4];
                    document.getElementById("player1").style.top = pos[5];
                }
                else if(old_pos1 == 46)
                {
                    document.getElementById("player1").style.left = pos[5];
                    document.getElementById("player1").style.top = pos[5];
                }
                else if(old_pos1 == 47)
                {
                    document.getElementById("player1").style.left = pos[6];
                    document.getElementById("player1").style.top = pos[5];
                   
                }
                else if(old_pos1 == 48)
                {
                    document.getElementById("player1").style.left = pos[7];
                    document.getElementById("player1").style.top = pos[5];
                }
                else if(old_pos1 == 49)
                {
                    document.getElementById("player1").style.left = pos[8];
                    document.getElementById("player1").style.top = pos[5];
                }
                else if(old_pos1 == 50)
                {
                    document.getElementById("player1").style.left = pos[9];
                    document.getElementById("player1").style.top = pos[5];
                }
                else if(old_pos1 == 51)
                {
                    document.getElementById("player1").style.left = pos[9];
                    document.getElementById("player1").style.top = pos[4];
                }
                else if(old_pos1 == 52)
                {
                    document.getElementById("player1").style.left = pos[8];
                    document.getElementById("player1").style.top = pos[4];
                }
                else if(old_pos1 == 53)
                {
                    document.getElementById("player1").style.left = pos[7];
                    document.getElementById("player1").style.top = pos[4];
                }
                else if(old_pos1 == 54)
                {
                    document.getElementById("player1").style.left = pos[6];
                    document.getElementById("player1").style.top = pos[4];
                }
                else if(old_pos1 == 55)
                {
                    document.getElementById("player1").style.left = pos[5];
                    document.getElementById("player1").style.top = pos[4];
                }
                else if(old_pos1 == 56)
                {
                    document.getElementById("player1").style.left = pos[4];
                    document.getElementById("player1").style.top = pos[4];
                   
                }
                else if(old_pos1 == 57)
                {
                    document.getElementById("player1").style.left = pos[3];
                    document.getElementById("player1").style.top = pos[4];
                }
                else if(old_pos1 == 58)
                {
                    document.getElementById("player1").style.left = pos[2];
                    document.getElementById("player1").style.top = pos[4];
                }
                else if(old_pos1 == 59)
                {
                    document.getElementById("player1").style.left = pos[1];
                    document.getElementById("player1").style.top = pos[4];
                }
                else if(old_pos1 == 60)
                {
                    document.getElementById("player1").style.left = pos[0];
                    document.getElementById("player1").style.top = pos[4];
                }
                else if(old_pos1 == 61)
                {
                    document.getElementById("player1").style.left = pos[0];
                    document.getElementById("player1").style.top = pos[3];
                }
                else if(old_pos1 == 62)
                {
                    document.getElementById("player1").style.left = pos[1];
                    document.getElementById("player1").style.top = pos[3];
                }
                else if(old_pos1 == 63)
                {
                    document.getElementById("player1").style.left = pos[2];
                    document.getElementById("player1").style.top = pos[3];
                   
                }
                else if(old_pos1 == 64)
                {
                    document.getElementById("player1").style.left = pos[3];
                    document.getElementById("player1").style.top = pos[3];
                }
                else if(old_pos1 == 65)
                {
                    document.getElementById("player1").style.left = pos[4];
                    document.getElementById("player1").style.top = pos[3];
                }
                else if(old_pos1 == 66)
                {
                    document.getElementById("player1").style.left = pos[5];
                    document.getElementById("player1").style.top = pos[3];
                }
                else if(old_pos1 == 67)
                {
                    document.getElementById("player1").style.left = pos[6];
                    document.getElementById("player1").style.top = pos[3];
                }
                else if(old_pos1 == 68)
                {
                    document.getElementById("player1").style.left = pos[7];
                    document.getElementById("player1").style.top = pos[3];
                }
                else if(old_pos1 == 69)
                {
                    document.getElementById("player1").style.left = pos[8];
                    document.getElementById("player1").style.top = pos[3];
                }
                else if(old_pos1 == 70)
                {
                    document.getElementById("player1").style.left = pos[9];
                    document.getElementById("player1").style.top = pos[3];
                }
                else if(old_pos1 == 71)
                {
                    document.getElementById("player1").style.left = pos[9];
                    document.getElementById("player1").style.top = pos[2];
                   
                }
                else if(old_pos1 == 72)
                {
                    document.getElementById("player1").style.left = pos[8];
                    document.getElementById("player1").style.top = pos[2];
                }
                else if(old_pos1 == 73)
                {
                    document.getElementById("player1").style.left = pos[7];
                    document.getElementById("player1").style.top = pos[2];
                   
                }
                else if(old_pos1 == 74)
                {
                    document.getElementById("player1").style.left = pos[6];
                    document.getElementById("player1").style.top = pos[2];
                }
                else if(old_pos1 == 75)
                {
                    document.getElementById("player1").style.left = pos[5];
                    document.getElementById("player1").style.top = pos[2];
                }
                else if(old_pos1 == 76)
                {
                    document.getElementById("player1").style.left = pos[4];
                    document.getElementById("player1").style.top = pos[2];
                }
                else if(old_pos1 == 77)
                {
                    document.getElementById("player1").style.left = pos[3];
                    document.getElementById("player1").style.top = pos[2];
                }
                else if(old_pos1 == 78)
                {
                    document.getElementById("player1").style.left = pos[2];
                    document.getElementById("player1").style.top = pos[2];
                }
                else if(old_pos1 == 79)
                {
                    document.getElementById("player1").style.left = pos[1];
                    document.getElementById("player1").style.top = pos[2];
                }
                else if(old_pos1 == 80)
                {
                    document.getElementById("player1").style.left = pos[0];
                    document.getElementById("player1").style.top = pos[2];
                }
                else if(old_pos1 == 81)
                {
                    document.getElementById("player1").style.left = pos[0];
                    document.getElementById("player1").style.top = pos[1];
                }
                else if(old_pos1 == 82)
                {
                    document.getElementById("player1").style.left = pos[1];
                    document.getElementById("player1").style.top = pos[1];
                   
                }
                else if(old_pos1 == 83)
                {
                    document.getElementById("player1").style.left = pos[2];
                    document.getElementById("player1").style.top = pos[1];
                }
                else if(old_pos1 == 84)
                {
                    document.getElementById("player1").style.left = pos[3];
                    document.getElementById("player1").style.top = pos[1];
                }
                else if(old_pos1 == 85)
                {
                    document.getElementById("player1").style.left = pos[4];
                    document.getElementById("player1").style.top = pos[1];
                }
                else if(old_pos1 == 86)
                {
                    document.getElementById("player1").style.left = pos[5];
                    document.getElementById("player1").style.top = pos[1];
                }
                else if(old_pos1 == 87)
                {
                    document.getElementById("player1").style.left = pos[6];
                    document.getElementById("player1").style.top = pos[1];
                }
                else if(old_pos1 == 88)
                {
                    document.getElementById("player1").style.left = pos[7];
                    document.getElementById("player1").style.top = pos[1];
                }
                else if(old_pos1 == 89)
                {
                    document.getElementById("player1").style.left = pos[8];
                    document.getElementById("player1").style.top = pos[1];
                }
                else if(old_pos1 == 90)
                {
                    document.getElementById("player1").style.left = pos[9];
                    document.getElementById("player1").style.top = pos[1];
                }
                else if(old_pos1 == 91)
                {
                    document.getElementById("player1").style.left = pos[9];
                    document.getElementById("player1").style.top = pos[0];
                }
                else if(old_pos1 == 92)
                {
                    document.getElementById("player1").style.left = pos[8];
                    document.getElementById("player1").style.top = pos[0];
                   
                }
                else if(old_pos1 == 93)
                {
                    document.getElementById("player1").style.left = pos[7];
                    document.getElementById("player1").style.top = pos[0];
                }
                else if(old_pos1 == 94)
                {
                    document.getElementById("player1").style.left = pos[6];
                    document.getElementById("player1").style.top = pos[0];
                }
                else if(old_pos1 == 95)
                {
                    document.getElementById("player1").style.left = pos[5];
                    document.getElementById("player1").style.top = pos[0];
                }
                else if(old_pos1 == 96)
                {
                    document.getElementById("player1").style.left = pos[4];
                    document.getElementById("player1").style.top = pos[0];
                }
                else if(old_pos1 == 97)
                {
                    document.getElementById("player1").style.left = pos[3];
                    document.getElementById("player1").style.top = pos[0];
                }
                else if(old_pos1 == 98)
                {
                    document.getElementById("player1").style.left = pos[2];
                    document.getElementById("player1").style.top = pos[0];
                   
                }
                else if(old_pos1 == 99)
                {
                    document.getElementById("player1").style.left = pos[1];
                    document.getElementById("player1").style.top = pos[0];
                }
                else if(old_pos1 == 100)
                {
                    document.getElementById("player1").style.left = pos[0];
                    document.getElementById("player1").style.top = pos[0];
                }

                old_pos1 = old_pos1 + 1

                await sleep(500)
            }      

            check_obj()
        }
        else
        {
            change_dice2()

            old_pos2 = pos2

            if(pos2 + r <= 100)
            {
                pos2 = pos2 + r
            }

            console.log(old_pos2)
            console.log(pos2)

            while(old_pos2 < pos2 + 1)
            {
                if(old_pos2 == 1)
                {  
                    document.getElementById("player2").style.left = pos[0];
                    document.getElementById("player2").style.top = pos[9];
                }
                else if(old_pos2 == 2)
                {
                    document.getElementById("player2").style.left = pos[1];
                    document.getElementById("player2").style.top = pos[9];
                }
                else if(old_pos2 == 3)
                {
                    document.getElementById("player2").style.left = pos[2];
                    document.getElementById("player2").style.top = pos[9];
                }
                else if(old_pos2 == 4)
                {
                    document.getElementById("player2").style.left = pos[3];
                    document.getElementById("player2").style.top = pos[9];
                    
                }
                else if(old_pos2 == 5)
                {
                    document.getElementById("player2").style.left = pos[4];
                    document.getElementById("player2").style.top = pos[9];
                }
                else if(old_pos2 == 6)
                {
                    document.getElementById("player2").style.left = pos[5];
                    document.getElementById("player2").style.top = pos[9];
                }
                else if(old_pos2 == 7)
                {
                    document.getElementById("player2").style.left = pos[6];
                    document.getElementById("player2").style.top = pos[9];
                }
                else if(old_pos2 == 8)
                {
                    document.getElementById("player2").style.left = pos[7];
                    document.getElementById("player2").style.top = pos[9];
                }
                else if(old_pos2 == 9)
                {
                    document.getElementById("player2").style.left = pos[8];
                    document.getElementById("player2").style.top = pos[9];
                }
                else if(old_pos2 == 10)
                {
                    document.getElementById("player2").style.left = pos[9];
                    document.getElementById("player2").style.top = pos[9];
                }
                else if(old_pos2 == 11)
                {
                    document.getElementById("player2").style.left = pos[9];
                    document.getElementById("player2").style.top = pos[8];
                }
                else if(old_pos2 == 12)
                {
                    document.getElementById("player2").style.left = pos[8];
                    document.getElementById("player2").style.top = pos[8];
                }
                else if(old_pos2 == 13)
                {
                    document.getElementById("player2").style.left = pos[7];
                    document.getElementById("player2").style.top = pos[8];
                }
                else if(old_pos2 == 14)
                {
                    document.getElementById("player2").style.left = pos[6];
                    document.getElementById("player2").style.top = pos[8];
                }
                else if(old_pos2 == 15)
                {
                    document.getElementById("player2").style.left = pos[5];
                    document.getElementById("player2").style.top = pos[8];
                }
                else if(old_pos2 == 16)
                {
                    document.getElementById("player2").style.left = pos[4];
                    document.getElementById("player2").style.top = pos[8];
                }
                else if(old_pos2 == 17)
                {
                    document.getElementById("player2").style.left = pos[3];
                    document.getElementById("player2").style.top = pos[8];
                }
                else if(old_pos2 == 18)
                {
                    document.getElementById("player2").style.left = pos[2];
                    document.getElementById("player2").style.top = pos[8];
                }
                else if(old_pos2 == 19)
                {
                    document.getElementById("player2").style.left = pos[1];
                    document.getElementById("player2").style.top = pos[8];
                }
                else if(old_pos2 == 20)
                {
                    document.getElementById("player2").style.left = pos[0];
                    document.getElementById("player2").style.top = pos[8];
                }
                else if(old_pos2 == 21)
                {
                    document.getElementById("player2").style.left = pos[0];
                    document.getElementById("player2").style.top = pos[7];
                    
                }
                else if(old_pos2 == 22)
                {
                    document.getElementById("player2").style.left = pos[1];
                    document.getElementById("player2").style.top = pos[7];
                }
                else if(old_pos2 == 23)
                {
                    document.getElementById("player2").style.left = pos[2];
                    document.getElementById("player2").style.top = pos[7];
                }
                else if(old_pos2 == 24)
                {
                    document.getElementById("player2").style.left = pos[3];
                    document.getElementById("player2").style.top = pos[7];
                }
                else if(old_pos2 == 25)
                {
                    document.getElementById("player2").style.left = pos[4];
                    document.getElementById("player2").style.top = pos[7];
                }
                else if(old_pos2 == 26)
                {
                    document.getElementById("player2").style.left = pos[5];
                    document.getElementById("player2").style.top = pos[7];
                }
                else if(old_pos2 == 27)
                {
                    document.getElementById("player2").style.left = pos[6];
                    document.getElementById("player2").style.top = pos[7];
                }
                else if(old_pos2 == 28)
                {
                    document.getElementById("player2").style.left = pos[7];
                    document.getElementById("player2").style.top = pos[7];
                }
                else if(old_pos2 == 29)
                {
                    document.getElementById("player2").style.left = pos[8];
                    document.getElementById("player2").style.top = pos[7];
                    
                }
                else if(old_pos2 == 30)
                {
                    document.getElementById("player2").style.left = pos[9];
                    document.getElementById("player2").style.top = pos[7];
                    
                }
                else if(old_pos2 == 31)
                {
                    document.getElementById("player2").style.left = pos[9];
                    document.getElementById("player2").style.top = pos[6];
                }
                else if(old_pos2 == 32)
                {
                    document.getElementById("player2").style.left = pos[8];
                    document.getElementById("player2").style.top = pos[6];
                }
                else if(old_pos2 == 33)
                {
                    document.getElementById("player2").style.left = pos[7];
                    document.getElementById("player2").style.top = pos[6];
                }
                else if(old_pos2 == 34)
                {
                    document.getElementById("player2").style.left = pos[6];
                    document.getElementById("player2").style.top = pos[6];
                }
                else if(old_pos2 == 35)
                {
                    document.getElementById("player2").style.left = pos[5];
                    document.getElementById("player2").style.top = pos[6];
                }
                else if(old_pos2 == 36)
                {
                    document.getElementById("player2").style.left = pos[4];
                    document.getElementById("player2").style.top = pos[6];
                }
                else if(old_pos2 == 37)
                {
                    document.getElementById("player2").style.left = pos[3];
                    document.getElementById("player2").style.top = pos[6];
                }
                else if(old_pos2 == 38)
                {
                    document.getElementById("player2").style.left = pos[2];
                    document.getElementById("player2").style.top = pos[6];
                }
                else if(old_pos2 == 39)
                {
                    document.getElementById("player2").style.left = pos[1];
                    document.getElementById("player2").style.top = pos[6];
                }
                else if(old_pos2 == 40)
                {
                    document.getElementById("player2").style.left = pos[0];
                    document.getElementById("player2").style.top = pos[6];
                }
                else if(old_pos2 == 41)
                {
                    document.getElementById("player2").style.left = pos[0];
                    document.getElementById("player2").style.top = pos[5];
                }
                else if(old_pos2 == 42)
                {
                    document.getElementById("player2").style.left = pos[1];
                    document.getElementById("player2").style.top = pos[5];
                }
                else if(old_pos2 == 43)
                {
                    document.getElementById("player2").style.left = pos[2];
                    document.getElementById("player2").style.top = pos[5];
                    
                }
                else if(old_pos2 == 44)
                {
                    document.getElementById("player2").style.left = pos[3];
                    document.getElementById("player2").style.top = pos[5];
                }
                else if(old_pos2 == 45)
                {
                    document.getElementById("player2").style.left = pos[4];
                    document.getElementById("player2").style.top = pos[5];
                }
                else if(old_pos2 == 46)
                {
                    document.getElementById("player2").style.left = pos[5];
                    document.getElementById("player2").style.top = pos[5];
                }
                else if(old_pos2 == 47)
                {
                    document.getElementById("player2").style.left = pos[6];
                    document.getElementById("player2").style.top = pos[5];
                    
                }
                else if(old_pos2 == 48)
                {
                    document.getElementById("player2").style.left = pos[7];
                    document.getElementById("player2").style.top = pos[5];
                }
                else if(old_pos2 == 49)
                {
                    document.getElementById("player2").style.left = pos[8];
                    document.getElementById("player2").style.top = pos[5];
                }
                else if(old_pos2 == 50)
                {
                    document.getElementById("player2").style.left = pos[9];
                    document.getElementById("player2").style.top = pos[5];
                }
                else if(old_pos2 == 51)
                {
                    document.getElementById("player2").style.left = pos[9];
                    document.getElementById("player2").style.top = pos[4];
                }
                else if(old_pos2 == 52)
                {
                    document.getElementById("player2").style.left = pos[8];
                    document.getElementById("player2").style.top = pos[4];
                }
                else if(old_pos2 == 53)
                {
                    document.getElementById("player2").style.left = pos[7];
                    document.getElementById("player2").style.top = pos[4];
                }
                else if(old_pos2 == 54)
                {
                    document.getElementById("player2").style.left = pos[6];
                    document.getElementById("player2").style.top = pos[4];
                }
                else if(old_pos2 == 55)
                {
                    document.getElementById("player2").style.left = pos[5];
                    document.getElementById("player2").style.top = pos[4];
                }
                else if(old_pos2 == 56)
                {
                    document.getElementById("player2").style.left = pos[4];
                    document.getElementById("player2").style.top = pos[4];
                    
                }
                else if(old_pos2 == 57)
                {
                    document.getElementById("player2").style.left = pos[3];
                    document.getElementById("player2").style.top = pos[4];
                }
                else if(old_pos2 == 58)
                {
                    document.getElementById("player2").style.left = pos[2];
                    document.getElementById("player2").style.top = pos[4];
                }
                else if(old_pos2 == 59)
                {
                    document.getElementById("player2").style.left = pos[1];
                    document.getElementById("player2").style.top = pos[4];
                }
                else if(old_pos2 == 60)
                {
                    document.getElementById("player2").style.left = pos[0];
                    document.getElementById("player2").style.top = pos[4];
                }
                else if(old_pos2 == 61)
                {
                    document.getElementById("player2").style.left = pos[0];
                    document.getElementById("player2").style.top = pos[3];
                }
                else if(old_pos2 == 62)
                {
                    document.getElementById("player2").style.left = pos[1];
                    document.getElementById("player2").style.top = pos[3];
                }
                else if(old_pos2 == 63)
                {
                    document.getElementById("player2").style.left = pos[2];
                    document.getElementById("player2").style.top = pos[3];
                    
                }
                else if(old_pos2 == 64)
                {
                    document.getElementById("player2").style.left = pos[3];
                    document.getElementById("player2").style.top = pos[3];
                }
                else if(old_pos2 == 65)
                {
                    document.getElementById("player2").style.left = pos[4];
                    document.getElementById("player2").style.top = pos[3];
                }
                else if(old_pos2 == 66)
                {
                    document.getElementById("player2").style.left = pos[5];
                    document.getElementById("player2").style.top = pos[3];
                }
                else if(old_pos2 == 67)
                {
                    document.getElementById("player2").style.left = pos[6];
                    document.getElementById("player2").style.top = pos[3];
                }
                else if(old_pos2 == 68)
                {
                    document.getElementById("player2").style.left = pos[7];
                    document.getElementById("player2").style.top = pos[3];
                }
                else if(old_pos2 == 69)
                {
                    document.getElementById("player2").style.left = pos[8];
                    document.getElementById("player2").style.top = pos[3];
                }
                else if(old_pos2 == 70)
                {
                    document.getElementById("player2").style.left = pos[9];
                    document.getElementById("player2").style.top = pos[3];
                }
                else if(old_pos2 == 71)
                {
                    document.getElementById("player2").style.left = pos[9];
                    document.getElementById("player2").style.top = pos[2];
                    
                }
                else if(old_pos2 == 72)
                {
                    document.getElementById("player2").style.left = pos[8];
                    document.getElementById("player2").style.top = pos[2];
                }
                else if(old_pos2 == 73)
                {
                    document.getElementById("player2").style.left = pos[7];
                    document.getElementById("player2").style.top = pos[2];
                    
                }
                else if(old_pos2 == 74)
                {
                    document.getElementById("player2").style.left = pos[6];
                    document.getElementById("player2").style.top = pos[2];
                }
                else if(old_pos2 == 75)
                {
                    document.getElementById("player2").style.left = pos[5];
                    document.getElementById("player2").style.top = pos[2];
                }
                else if(old_pos2 == 76)
                {
                    document.getElementById("player2").style.left = pos[4];
                    document.getElementById("player2").style.top = pos[2];
                }
                else if(old_pos2 == 77)
                {
                    document.getElementById("player2").style.left = pos[3];
                    document.getElementById("player2").style.top = pos[2];
                }
                else if(old_pos2 == 78)
                {
                    document.getElementById("player2").style.left = pos[2];
                    document.getElementById("player2").style.top = pos[2];
                }
                else if(old_pos2 == 79)
                {
                    document.getElementById("player2").style.left = pos[1];
                    document.getElementById("player2").style.top = pos[2];
                }
                else if(old_pos2 == 80)
                {
                    document.getElementById("player2").style.left = pos[0];
                    document.getElementById("player2").style.top = pos[2];
                }
                else if(old_pos2 == 81)
                {
                    document.getElementById("player2").style.left = pos[0];
                    document.getElementById("player2").style.top = pos[1];
                }
                else if(old_pos2 == 82)
                {
                    document.getElementById("player2").style.left = pos[1];
                    document.getElementById("player2").style.top = pos[1];
                    
                }
                else if(old_pos2 == 83)
                {
                    document.getElementById("player2").style.left = pos[2];
                    document.getElementById("player2").style.top = pos[1];
                }
                else if(old_pos2 == 84)
                {
                    document.getElementById("player2").style.left = pos[3];
                    document.getElementById("player2").style.top = pos[1];
                }
                else if(old_pos2 == 85)
                {
                    document.getElementById("player2").style.left = pos[4];
                    document.getElementById("player2").style.top = pos[1];
                }
                else if(old_pos2 == 86)
                {
                    document.getElementById("player2").style.left = pos[5];
                    document.getElementById("player2").style.top = pos[1];
                }
                else if(old_pos2 == 87)
                {
                    document.getElementById("player2").style.left = pos[6];
                    document.getElementById("player2").style.top = pos[1];
                }
                else if(old_pos2 == 88)
                {
                    document.getElementById("player2").style.left = pos[7];
                    document.getElementById("player2").style.top = pos[1];
                }
                else if(old_pos2 == 89)
                {
                    document.getElementById("player2").style.left = pos[8];
                    document.getElementById("player2").style.top = pos[1];
                }
                else if(old_pos2 == 90)
                {
                    document.getElementById("player2").style.left = pos[9];
                    document.getElementById("player2").style.top = pos[1];
                }
                else if(old_pos2 == 91)
                {
                    document.getElementById("player2").style.left = pos[9];
                    document.getElementById("player2").style.top = pos[0];
                }
                else if(old_pos2 == 92)
                {
                    document.getElementById("player2").style.left = pos[8];
                    document.getElementById("player2").style.top = pos[0];
                    
                }
                else if(old_pos2 == 93)
                {
                    document.getElementById("player2").style.left = pos[7];
                    document.getElementById("player2").style.top = pos[0];
                }
                else if(old_pos2 == 94)
                {
                    document.getElementById("player2").style.left = pos[6];
                    document.getElementById("player2").style.top = pos[0];
                }
                else if(old_pos2 == 95)
                {
                    document.getElementById("player2").style.left = pos[5];
                    document.getElementById("player2").style.top = pos[0];
                }
                else if(old_pos2 == 96)
                {
                    document.getElementById("player2").style.left = pos[4];
                    document.getElementById("player2").style.top = pos[0];
                }
                else if(old_pos2 == 97)
                {
                    document.getElementById("player2").style.left = pos[3];
                    document.getElementById("player2").style.top = pos[0];
                }
                else if(old_pos2 == 98)
                {
                    document.getElementById("player2").style.left = pos[2];
                    document.getElementById("player2").style.top = pos[0];
                    
                }
                else if(old_pos2 == 99)
                {
                    document.getElementById("player2").style.left = pos[1];
                    document.getElementById("player2").style.top = pos[0];
                }
                else if(old_pos2 == 100)
                {
                    document.getElementById("player2").style.left = pos[0];
                    document.getElementById("player2").style.top = pos[0];
                }

                old_pos2 = old_pos2 + 1

                await sleep(500)
            }

            check_obj()
        }

        check_win()
}