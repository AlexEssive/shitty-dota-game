var urTeam = [{'Id':'15'},{'Id':'2'},{'Id':'13'},{'Id':'14'},{'Id':'5'}];

var teamStats = Array();
    teamStats['Teamplay'] = '10';
    teamStats['Strategy'] = '50';
    teamStats['Atmosphere'] = '90';

function showTeam() {
    var player = allPlayers;
    var team = urTeam;
    var text = "";
    refreshGameBlock();

    //top buttons
    text+="<div class='row team_action' style='margin-bottom: 2%'>" +
        "<div class='col-4'><button><i>Пиар</i> <span>500$</span></button></div>" +
        "<div class='col-4'><button><i>Написать пост</i> <span>500$</span></button></div>" +
        "</div>";

    text+="<div class='row team'>";
    text+="<div class='col-11 pad0 team_cards'>";
    for (var i=0; i < player.length; i++) {
        for (var j=0; j < team.length; j++) {
            if (team[j].Id===player[i].Id) {
                var n = i + 1;
                text+="<div id='card" + n + "' class='team_card' onclick='playerAction(this);'>" +
                    "<div id='status" + n + "'><span>Status</span></div>" +
                    "<div class='row'><div class='col-6 padr'><img src='img/players/" + player[i].Image + "'></div>" +
                    "<div class='col-6 team_info'>" +
                    "<span class='pos_span'>" + player[i].Position + "</span><br>" +
                    "<span>Name: " + player[i].Name + "</span><br>" +
                    "<span>Age: " + player[i].Age + "</span><br>" +
                    "<span>About: " + player[i].About + "</span>" +
                    "</div></div>" +
                    appendProgressBars(player[i], i + 1) +
                    "</div>";
            }
        }
    }
    text+="</div><div class='col-1 team_kick'><a class='' href=''>kick</a></div>";
    text+="</div>";

    //bottom buttons
    text+="<div class='row team_action'>" +
        "<div class='col-4'><button><i>Буткемп</i> <span>500$</span></button></div>" +
        "<div class='col-4'><button><i>Фотосет</i> <span>500$</span></button></div>" +
        "<div class='col-4'><button><i>Поменять роль</i> <span>500$</span></button></div>" +
        "</div>";

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
        } else {
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

function showMenu(top,left,id) {
    $('.menu').remove();

    $('#'+id).append("\t<menu id='contextMenu' class=\"menu\">\n" +
        "\t\t<li class=\"menu-item\">\n" +
        "\t\t\t<button type=\"button\" class=\"menu-btn\" onclick=\"menuRest(this);\">\n" +
        "\t\t\t\t<i class=\"fa fa-folder-open\"></i>\n" +
        "\t\t\t\t<span class=\"menu-text\">Отдыхать</span>\n" +
        "\t\t\t</button>\n" +
        "\t\t</li>\n" +
        "\t\t<!--<li class=\"menu-item disabled\">-->\n" +
        "\t\t<li class=\"menu-item\">\n" +
        "\t\t\t<button type=\"button\" class=\"menu-btn\" onclick=\"menuRest(this);\">\n" +
        "\t\t\t\t<span class=\"menu-text\">Анализ реплеев</span>\n" +
        "\t\t\t</button>\n" +
        "\t\t</li>\n" +
        "\t\t<li class=\"menu-item\">\n" +
        "\t\t\t<button type=\"button\" class=\"menu-btn\" onclick=\"menuRest(this);\">\n" +
        "\t\t\t\t<i class=\"fa fa-reply\"></i>\n" +
        "\t\t\t\t<span class=\"menu-text\">Разработка стратегий</span>\n" +
        "\t\t\t</button>\n" +
        "\t\t</li>\n" +
        "\t\t<li class=\"menu-item\">\n" +
        "\t\t\t<button type=\"button\" class=\"menu-btn\" onclick=\"menuRest(this);\">\n" +
        "\t\t\t\t<i class=\"fa fa-download\"></i>\n" +
        "\t\t\t\t<span class=\"menu-text\">Тренироваться</span>\n" +
        "\t\t\t</button>\n" +
        "\t\t</li>\n" +
        "\t\t<li class=\"menu-item\">\n" +
        "\t\t\t<button type=\"button\" class=\"menu-btn\" onclick=\"menuRest(this);\">\n" +
        "\t\t\t\t<i class=\"fa fa-edit\"></i>\n" +
        "\t\t\t\t<span class=\"menu-text\">Стримить</span>\n" +
        "\t\t\t</button>\n" +
        "\t\t</li>\n" +
        "\t\t<li class=\"menu-item\">\n" +
        "\t\t\t<button type=\"button\" class=\"menu-btn\" onclick=\"menuRest(this);\">\n" +
        "\t\t\t\t<i class=\"fa fa-trash\"></i>\n" +
        "\t\t\t\t<span class=\"menu-text\">Психолог</span>\n" +
        "\t\t\t</button>\n" +
        "\t\t</li>\n" +
        "\t</menu>");

    $(".menu").css({top: 40,  position:'absolute'});
    $(".menu").show();
}

function changeStatus(id) {
    $('#status'+id).find("span").remove();
    $('#status'+id).append("<span>Work</span>");
}


