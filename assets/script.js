const playerBtns = document.querySelectorAll(".player a");
const playerlist = document.getElementById("playerlist");
const player_expense = document.getElementById("player-expense");
const total_expense = document.getElementById("player-expense-total");


for (let i = 0; i < playerBtns.length; i++) {
    playerBtns[i].addEventListener("click", function (e) {
        e.preventDefault();
        let el = playerBtns[i];
        if(playerlist.querySelectorAll("li").length>4){
            alert("Already selected 5 players.");
            return false;
        }
        el.classList.add("disabled");
        playerlist.innerHTML += "<li class='my-2'>" + el.parentNode.querySelector(".card-title").innerHTML + "</li>";
    });
}
