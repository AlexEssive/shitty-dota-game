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
    //random_result === result ? message = "Закономерный исход!" : message = "Неожиданный исход!";
    //var result=false, message="";

    var bo = randomBo();
    var win=0,lose=0,result=false;

    for(var i=0; i<bo; i++) {
        countUrRating() > countTeamRating(id) ? result=true : result=false;
        var random_result = iceFrog(result);
        result = random_result;
        if (result) win++; else lose++;
    }
    win>lose ? result=true : result=false;

    var print_result = new Array();
        print_result['outcome'] = result;
        print_result['win'] = win;
        print_result['lose'] = lose;
        print_result['bo'] = bo;

    return print_result;
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

function iceFrog() {
    var result;
    var random = getRndInteger(1,100);
    random < 11 ? result = !result : result = result;
    random > 90 ? result = result : result = !result;
    return result;
}

function playQvGame() {
    var id = getRndInteger(1, allTeam.length).toString();

    var playQv = playMatch(id);

    var qvResult = new Array();
        qvResult['outcome'] = playQv.outcome;
        qvResult['win'] = playQv.win;
        qvResult['lose'] = playQv.lose;
        qvResult['bo'] = playQv.bo;
        qvResult['enemy'] = allTeam[parseInt(id)].Id;

    return qvResult;
}

function toggleMore() {
    $("#toggle_more").slideToggle();
}

function toggleMatch() {
    $("#matchModal").slideToggle();
}

function showMatchGame(enemy, score, bo) {
    toggleMatch();

    var img1 = teamLogo;
    var text1 = teamName;
    var img2 = "img/teams/"+allTeam[enemy].Logo;
    var text2 =  allTeam[enemy].Name;
    var scores = "4:1";

    $("#team_img_ur").attr('src',img1);
    $("#team_img_enemy").attr('src',img2);
    $("#team_text_ur").text(text1);
    $("#team_text_enemy").text(text2);
    $("#team_score").text(scores);
    $("#team_bo").text(bo);
}

function playBoGame(enemy) {
    var bo = randomBo();
    var win=0,lose=0,result=false;
    for(var i=0; i<bo; i++) {
        var play = playMatch(enemy);
        if (play.outcome) win++; else lose++;
    }
    win>lose ? result=true : result=false;
    return result;
}

function randomBo() {
    var result = 1, int = getRndInteger(1,4);
    switch(int) {
        case 1: result = 1; break;
        case 2: result = 3; break;
        case 3: result = 5; break;
    }
    return result;
}