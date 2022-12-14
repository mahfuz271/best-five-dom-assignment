const playerBtns = document.querySelectorAll(".player a");
const playerlist = document.getElementById("playerlist");
const player_expense = document.getElementById("player-expense");
const total_expense = document.getElementById("player-expense-total");

function parseIntVal(val){
    val = parseInt(val);
    if(isNaN(val)){
        val = 0;
    }
    return val;
}

function get_input_int(el_id){
    return parseIntVal(document.getElementById(el_id).value);
}

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

document.getElementById("calculate").addEventListener("click", function (e) {
    let total = playerlist.querySelectorAll("li").length;
    player_expense.innerText = 0;
    if(total<1){
        alert("Select a player.");
        return false;
    }
    let cost = get_input_int("cost-per-player");
    if(cost<1){
        alert("Invalid player cost.");
        return false;
    }
    player_expense.innerText = cost * total;
});

document.getElementById("calculate-total").addEventListener("click", function (e) {
    //auto recalculate cost before total cost
    document.getElementById("calculate").click();

    let player_cost = parseIntVal(document.getElementById("player-expense").innerText);
    total_expense.innerText = 0;
    if(player_cost<1){
        alert("Invalid player cost.");
        return false;
    }
    let manager = get_input_int("cost-manager");
    if(manager<1){
        alert("Invalid manager cost.");
        return false;
    }
    let coach = get_input_int("cost-coach");
    if(coach<1){
        alert("Invalid coach cost.");
        return false;
    }
    total_expense.innerText = player_cost + manager + coach;
});