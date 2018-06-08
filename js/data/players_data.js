//players
$.getJSON("../data/players.json", function(json) {
    allPlayers = json;
});
//end players

//team
$.getJSON("../data/team.json", function(json) {
    allTeam = json;
});
//end players

//matches
$.getJSON("../data/matches.json", function(json) {
    allMatches = json;
});
//end matches

//tournaments
$.getJSON("../data/tournaments.json", function(json) {
    allTournaments = json;
});
//end tournaments