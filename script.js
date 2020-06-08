var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset")
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var num = document.querySelector("input");
var newscore = document.querySelector("p span");
var p1score=0;
var p2score=0;
var gameover= false;
var score = 5;

p1.addEventListener("click",function(){
    if(!gameover)
    {
        p1score++;
        if(p1score === score)
        {
            p1display.classList.add("winner");
            gameover = true;
        }
        p1display.textContent = p1score;
    }
    
});

p2.addEventListener("click",function(){
    if(!gameover)
    {
        p2score++;
        if(p2score === score)
        {
            p2display.classList.add("winner");
            gameover = true;
        }
        p2display.textContent = p2score;
    }    
});

reset.addEventListener("click",function(){
    clear();
});

function clear(){
    gameover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
};

num.addEventListener("change",function(){
    newscore.textContent = num.value;
    score = Number(num.value);
    clear();
});