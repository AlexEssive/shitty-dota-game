function playTournamentGame() {
    var id = 1;// id team enemy
    return playMatch(id);
}

function getTournament() {
    var result = false;
    getCookie("teamTournament") !== undefined ? result = getCookie("teamTournament"): result = false;
    return result;
}

function setTournament(tour) {
    setCookie("teamTournament", tour.toString());
    return true;
}

function endTournament() {
    deleteCookie("teamTournament");
    return true;
}

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
    console.log(teams);

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
    var enemies = getCookie("currentTournament").Teams;
    var enemy = enemies[Math.floor(Math.random()*enemies.length)];
    console.log(enemy);
}

function playTournament() {
    var start_count_teams = getCookie("currentTournament").Members;
    var enemies = getCookie("currentTournament").Teams;
    var current_enemy = getRandomEnemy();
}