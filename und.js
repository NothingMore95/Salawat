var but = document.querySelector("button")

var But = document.querySelector("p")

var score = 0


function cnop() {
    score++;
    But.textContent = score
    if(score == 100 || score == 200 || score == 300 || score == 400 || score == 500 || score == 1000){
        But.textContent = "Вы прочитали " + score + " салаватов"
    }
}


but.addEventListener("click", cnop)









