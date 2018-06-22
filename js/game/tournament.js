function createTournament(id) {

    var tournaments = allTournaments;

    var name = tournaments[parseInt(id)].Name;
    var date1 = tournaments[parseInt(id)].Date_start;
    var date2 = tournaments[parseInt(id)].Date_end;
    var prize = tournaments[parseInt(id)].Prize;
    var count = tournaments[parseInt(id)].Members;

    var teams=Array();
    var team_id=0;

    for (var i=0; i < count-1; i++) {
        if (count<=allTeam.length)
        while(teams.indexOf(team_id)>=0) {
            team_id=getRndInteger(1,allTeam.length);
        }
        teams.push(team_id);
    }

    console.log("'" + name + "', " + date1 + " - " + date2 + ", " + prize + "$, " + count + " команд");

    var currentTournament = [
        {
            "Name":name,
            "Date_start":date1,
            "Date_end":date2,
            "Prize":prize,
            "Members":count,
            "Teams":teams
        }
    ];

    setCookie("currentTournament", JSON.stringify(currentTournament));

    return teams;
}

function getRandomEnemy() {
    var enemies = JSON.parse(getCookie("currentTournament"))[0].Teams;
    var enemy = enemies[Math.floor(Math.random()*enemies.length)];
    return enemy;
}

function playTournament() {
    var result = false;
    // win - виграв турнір
    // lose - програв турнір
    // next - турнір продовжується

    //1 - визначимо 1ого врага і зіграємо з ним матч
    var enemies = JSON.parse(getCookie("currentTournament"))[0].Teams;
    var current_enemy = getRandomEnemy();
    enemies.splice( current_enemy, 1 ); //console.log(current_enemy+" - "+enemies);
    var play = playMatch(current_enemy);

    if(play.outcome) {
        //2 - визначимо переможців з ін. команд, створимо новий масив учасників з переможців
        var new_count_teams = Math.ceil(enemies.length / 2);
        var new_enemies = enemies.slice(0, new_count_teams);

        //3 - запишемо в кукі учасників - переможців
        var currentTournament = [
            {
                "Name":JSON.parse(getCookie("currentTournament"))[0].Name,
                "Date_start":JSON.parse(getCookie("currentTournament"))[0].Date_start,
                "Date_end":JSON.parse(getCookie("currentTournament"))[0].Date_end,
                "Prize":JSON.parse(getCookie("currentTournament"))[0].Prize,
                "Members":JSON.parse(getCookie("currentTournament"))[0].Members,
                "Teams":new_enemies
            }
        ];
        setCookie("currentTournament", JSON.stringify(currentTournament));

        //4 - перевірка на переможця турніра
        enemies.length === 0 ? result = "win" : result = "next";
    }

    else {
        result = "lose";
    }

    //5 - якщо win або lose - закрити турнір
    if (result==="win" || result==="lose") deleteCookie("currentTournament");

    if (result==="win") alert("You win!");
    if (result==="lose") alert("You lose!");

    return result;
}