function game() {
    //Vairables.
    var gen = Math.floor(Math.random() * 100) + 1;
    var check = true;
    var guess = 0;
    var round = 0;
    var winning_round = 0;
    var closest = 0;
    var recentGuess = 0;
    var button = document.getElementById("button");
    button.style.display = "block";
    //Creating elements
    var tbl = document.getElementById("tbl");
    var td = document.createElement("td");
    var p2 = document.createElement("p");
    var p = document.createElement("p");
    tbl.appendChild(td);
    td.appendChild(p2);
    var tries = document.getElementById("tries").value;
    parseInt(tries);
    var big = "";
    var small = "";
    //While-loop to keep the game going.



    while (check == true) {
        guess = prompt("guess,If you want to stop play , type: 'stop'. If you want a clue type: 'clue'.");
        if (guess == 'stop' || guess == 'Stop') {
            td.setAttribute("style", "color:red; background-color:black; font-weight: bold;");
            tbl.setAttribute("style", "background-color:black;");
            p.innerHTML = " ";
            p2.innerHTML = "User decided to quit";
            break
        }
        //Checking win section.
        if (guess == gen) {
            check = false;
            var td2 = document.createElement("td");
            var tr2 = document.createElement("tr");
            td2.innerHTML = "<h1>" + "You guessed well! Number was: " + guess + "</h1>";
            tr2.setAttribute("style", "background-color:red; color:white;");
            tr2.appendChild(td2);
            tbl.appendChild(tr2)
            winning_round = round;
        } else {
            //Ending.
            round++;
            var td1 = document.createElement("td");
            var tr = document.createElement("tr");
            if (guess == null) {
                td1.innerHTML = "You didnt guess ):";
                alert("Please guess a number");
                alert("Re-starting the game...");
                location.reload();
                round = 1;
            } else {
                td1.innerHTML = "<h3>" + "Round " + round + " has ended, Your guess was: " + guess + "</h3>";
                tr.appendChild(td1);
                tbl.appendChild(tr);
            }
        }
        if (guess == "clue" || guess == "Clue") {
            recentGuess = prompt("What was your recent guess?");
            var checkBig = recentGuess > gen;
            var checkSmall = recentGuess < gen;
            if (checkBig) {
                alert("Your guess is bigger than the number!");
                td1.innerHTML = "Your guess is bigger than the number!";
            } else if (checkSmall) {
                alert("your guess is smaller than the number!");
                td1.innerHTML = "your guess is smaller than the number!"
            }
        }
        if (round == tries) {
            alert("Out of tries ):");
            break
        }
    }

    //End,Outputs.
    if (guess == "stop" || guess == "Stop") {
        p.innerHTML = ("Didn't win. Num was: " + guess);
        p2.setAttribute("style", "font-weight:bold; font-size:14px;");
        p2.innerHTML = "<h2>User decided to quit</h2></br> <h3>Choose 'play again' to play.</h3>";
        tbl.setAttribute("style", "height:100%;align:center;");
        button.style.display = "visible";
        button.innerHTML = "Play again";
    } else if (round == tries) {
        p.innerHTML = ("Didn't win. Num was: " + guess);
        p2.setAttribute("style", "font-weight:bold; font-size:14px;");
        p2.innerHTML = "<h2>Out of tries</h2></br> <h3>Choose play again to play.</h3>";
        button.style.display = "visible";
        tbl.setAttribute("style", "height:100%;align:center;");
        button.innerHTML = "Play again";
    } else {
        p.innerHTML = ("<h3>Won in round " + "<b style='color:red;'>" + winning_round + "</b>" + "</h3>");
        p2.innerHTML = "Num was: " + gen + ",user won in round " + winning_round++;
        button.style.display = "visible";
        button.innerHTML = "Play again";
    }

}
game();