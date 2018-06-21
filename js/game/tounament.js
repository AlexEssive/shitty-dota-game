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
    //poka ne smotret
    var tournaments = allTournaments;

    var name = tournaments[parseInt(id)].Name;
    var date1 = tournaments[parseInt(id)].Date_start;
    var date2 = tournaments[parseInt(id)].Date_end;
    var prize = tournaments[parseInt(id)].Prize;
    var count = tournaments[parseInt(id)].Members;

    var teams=Array();
    var team_id;

    for (var i=0; i < count; i++) {
        while(teams.indexOf(team_id)<0) {team_id=getRndInteger(1,allTeam.length);}
        teams.push(team_id);
    }

    console.log(teams);
}
