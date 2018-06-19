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
