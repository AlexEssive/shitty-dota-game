var teamStats = Array();
    teamStats['Teamplay'] = '10';
    teamStats['Strategy'] = '50';
    teamStats['Atmosphere'] = '90';

function showTeam() {

    var player = allPlayers;
    var team = urTeam;
    var text = "";
    refreshGameBlock();
    text+="<div class='row team_action' style='margin-bottom: 2%'>" +
        "<div class='col-4'><button><i>Пиар</i> <span>500$</span></button></div>" +
        "<div class='col-4'><button><i>Написать пост</i> <span>500$</span></button></div>" +
        "</div>"; //top buttons
    text+="<div class='row team'>";
    text+="<div class='col-11 pad0 team_cards'>";
    for (var i=0; i < player.length; i++) {
        for (var j=0; j < team.length; j++) {
            if (team[j].Id===player[i].Id) {
                var n = i + 1;
                text+="<div id='card" + n + "' class='team_card' onclick='playerAction(this);'>" +
                    "<div id='status" + n + "'><span>Status</span><input name='" + n + "' class='check-players' type='checkbox'></div>" +
                    "<div class='row'><div class='col-6 padr'><<img src="
                
                " alt="
                
                "> src='img/players/" + player[i].Image + "'></div>" +
                    "<div class='col-6 team_info'>" +
                    "<span class='pos_span'>" + team[j].Position + "</span><br>" +
                    "<span>Name: " + player[i].Name + "</span><br>" +
                    "<span>Age: " + player[i].Age + "</span><br>" +
                    "<span>About: " + player[i].About + "</span>" +
                    "</div></div>" +
                    appendProgressBars(team[j], i + 1) +
                    "</div>";
            }
        }
    }
    text+="</div><div class='col-1 team_kick'><a class='' href=''>kick</a></div>";
    text+="</div>";
    text+="<div class='row team_action'>" +
        "<div class='col-4'><button><i>Буткемп</i> <span>500$</span></button></div>" +
        "<div class='col-4'><button><i>Фотосет</i> <span>500$</span></button></div>" +
        "<div class='col-4'><button><i>Поменять роль</i> <span>500$</span></button></div>" +
        "</div>"; //bottom buttons

    //bottom team stats
    text+=appendTeamBars();
    $('#gameBlock').append(text);
}

function appendTeamBars(team) {

    var text = "";
    text+="<div class='row team_stats'>";
    for (var k in teamStats) {
        var stat = teamStats[k];
        var classToColor;

        if (stat < 25) {
            classToColor = 'bg-danger';
        }
        else if ((stat <= 75) && (stat >= 25)) {
            classToColor = 'bg-warning';
        }
        else if ((stat <= 100) && (stat > 75)) {
            classToColor = 'bg-success';
        }
        else {
            classToColor = 'bg-dark';
        }
        text+="<div class='col-4'><div class='row'><div class='col-8'>" +
            "<span>" + k +"</span>" +
            "<div class=\"progress\">\n" +
            "<div class=\"progress-bar" + " " + classToColor + "\" style=\"width:" + stat +"%\"></div>\n" +
            "</div></div>" +
            "<div class='col-4 padl'><br><span>" + stat + "/100</span></div>" +
            "</div></div>";
    }
    text+="</div>";
    return text;
}

function appendProgressBars(player, number) {

    var text = "";
    text+="<div class='player_stats'>";
    for (var k in stats) {
        var stat = player[stats[k]];
        var classToColor;

        if (stat < 25) {
            classToColor = 'bg-danger';
        }
        else if ((stat <= 75) && (stat >= 25)) {
            classToColor = 'bg-warning';
        }
        else if ((stat <= 100) && (stat > 75)) {
            classToColor = 'bg-success';
        } else {
            classToColor = 'bg-dark';
        }
        text+="<div class='row'><div class='col-8'>" +
            "<span>" + k +"</span>" +
            "<div class=\"progress\">\n" +
            "<div class=\"progress-bar" + " " + classToColor + "\" style=\"width:" + stat +"%\"></div>\n" +
            "</div></div>" +
            "<div class='col-4 padl'><br><span>" + stat + "/100</span></div>" +
            "</div>";
    }
    text+="</div>";
    return text;
}

function playerAction(player) {
    var rect = player.getBoundingClientRect();
    var id = player.id;
    showMenu(rect.top,rect.left,id);
}

function changeStatus(id) {
    $('#status'+id).find("span").remove();
    $('#status'+id).append("<span>Work</span>");
}


