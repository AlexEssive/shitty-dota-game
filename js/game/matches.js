function showMatches() {

    var matches = allMatches;
    refreshGameBlock();
    var list="<div class='matches_list'>";
    for (var i=0; i < matches.length; i++) {
        list+="<span class='bold'>"+matches[i].Date + ": </span><br>";
        for (var j = 0; j < matches.length; j++) {
            if (matches[i].Date===matches[j].Date)
                list+=getTeamName(matches[j].Team)+", "+matches[j].Type+"<br>";
        }
        list+="<br>";
    }
    list+="</div>";
    $('#gameBlock').append(list);
}

function getTeamName(id) {
    var team = allTeam;
    for (var i=0; i < team.length; i++) {
        if (i===id) var name = team[i].Name;
    }
    return name;
}

function countTeamRating(id) {
    for (var i=0; i < allTeam.length; i++) {
        if(id===allTeam[i].Id) {
            var rating = Math.round(( parseInt(allTeam[i].Teamplay) + parseInt(allTeam[i].Strategy) + parseInt(allTeam[i].Atmosphere) ) / 3);
            break;
        }
    }
    return rating;
}

function countUrRating() {
    var rating = 0;
    rating = Math.round(( parseInt(teamStats.Teamplay) + parseInt(teamStats.Strategy) + parseInt(teamStats.Atmosphere) ) / 3);
    return rating;
}

function countUrMedia() {
    var media = 0;
    media = Math.round(( parseInt(urTeam[0].Media) + parseInt(urTeam[1].Media) + parseInt(urTeam[2].Media) + parseInt(urTeam[3].Media) + parseInt(urTeam[4].Media) ) / 5);
    return media;
}

function playMatch(id) {
    //дописати рандомний виграш/програш
    var result;
    countUrRating() > countTeamRating(id) ? result=true : result=false;
    return result;
}

function showTournaments() {
    var tournaments = allTournaments;
    refreshGameBlock();

    var list="<div class='tournaments_list'>";
    for (var i=0; i < tournaments.length; i++) {
        list+="<span class='bold'>" + tournaments[i].Name + " (" + tournaments[i].Date_start + " - " + tournaments[i].Date_end + ")" + "</span><br>";
    }
    list+="</div>";

    $('#gameBlock').append(list);
}
