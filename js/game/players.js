var stats = Array();
    stats['Скилл'] = 'Skill';
    stats['Социальность'] = 'Social';
    stats['Медийность'] = 'Media';

function showPlayers() {
    var players = allPlayers;
    var checked="",name="";
    refreshGameBlock();
    var text ="<div class='col-4' onClick='showPlayerInfo();'><ul id='player_list' class='player_list'>";
    for (var i=0; i < players.length; i++) {
        if (i===0) checked  = 'checked'; else checked='';
        text += "<li>" +
            "<input id='"+players[i].Id+"' class='player_radio' type='radio' name='player_radio' "+checked+">" +
            "<label for='"+players[i].Id+"'>" +
            players[i].Name +
            "</label>" +
            "</li>";
    }
    text += "</ul></div>";
    text += "<div class='col-2 pad0'><img class=\"button_arrow prev\" src='img/arrow_up.png' onclick='moveTop(this);'><br>" +
        "<img class=\"button_arrow next\" src='img/arrow_down.png' onclick='moveBot(this)'></div>";
    $('#gameBlock').append(text);

    showPlayerInfo();
}

function showPlayersRating() {
    var rating = allPlayers;
    var checked="",name="";
    refreshGameBlock();
    var text ="<div class='col-4' onClick='showPlayerInfo();'><ul id='player_list' class='player_list'>";

    rating.sort(function (a, b) {
        if (a.Skill < b.Skill) {
            return 1;
        }
        if (a.Skill > b.Skill) {
            return -1;
        }
        return 0;
    });

    for (var i=0; i < rating.length; i++) {
        if (i===0) checked  = 'checked'; else checked='';
        text += "<li>" +
            "<input id='"+rating[i].Id+"' class='player_radio' type='radio' name='player_radio' "+checked+">" +
            "<label for='"+rating[i].Id+"'>" +
            rating[i].Name +
            "</label>" +
            "</li>";
    }
    text += "</ul></div>";
    text += "<div class='col-2 pad0'><img class=\"button_arrow prev\" src='img/arrow_up.png' onclick='moveTop(this);'><br>" +
        "<img class=\"button_arrow next\" src='img/arrow_down.png' onclick='moveBot(this)'></div>";
    $('#gameBlock').append(text);

    showPlayerInfo();
}

function showPlayerInfo() {
    var text="",name="";
    var id = $('input[type=radio][name=player_radio]:checked').attr('id');
    var players = allPlayers;
    text += "<div class='col-6 player_detail'>";

    for (var i=0; i < players.length; i++) {
        if (i===(id-1)) {
            text += "<div class='team_card' style='width: 35%'>" +
                "<img src='img/players/" + players[i].Image + "'><br>" +
                "<div class='team_info'>" +
                "<span>Name: " + players[i].Name + "</span><br>" +
                "<span>Position: " + players[i].Position + "</span><br>" +
                "<span>Age: " + players[i].Age + "</span><br>" +
                "<span>About: " + players[i].About + "</span>" +
                "</div>" +
                "</div>";
        }
    }

    text += "</div>";

    $('.player_detail').remove();
    $('#gameBlock').append(text);
}

function scrollList(id) {
    //не работає вроді
    //скролить форму ігроків за стрелочкою в 'Рынок'
     $('#player_list').animate({
         scrollTop: $("#"+id).offset().bottom-10
     }, 100);
}

function moveTop(cl) {
    $(cl).parent().parent().find('input:checked').parent().prev().children('input').prop("checked", true);
    scrollList($(cl).parent().parent().find('input:checked').parent().prev().children('input').attr('id'));
    showPlayerInfo();
}

function moveBot(cl) {
    $(cl).parent().parent().find('input:checked').parent().next().children('input').prop("checked", true);
    scrollList($(cl).parent().parent().find('input:checked').parent().prev().children('input').attr('id'));
    showPlayerInfo();
}
