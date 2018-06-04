function showPlayers() {
    var players = allPlayers;
    var checked,name,v = true;
    refreshGameBlock();
    console.log(urTeam);
    var text ="<div class='col-4' onClick='showPlayerInfo();'><ul id='player_list' class='player_list'>";
    for (var i=0; i < players.length; i++) {
        if (i===0) checked='checked'; else checked='';
        text += "<li>" +
            "<input id='"+players[i].Id+"' class='player_radio' type='radio' name='player_radio' "+checked+">" +
            "<label for='"+players[i].Id+"'>" + players[i].Id + " - " + players[i].Name + "</label>" +
        "</li>";
    }
    text += "</ul></div>";
    text += "<div class='col-1 pad0'><img class=\"button_arrow prev\" src='img/arrow_up.png' onclick='moveTop(this);'><br>" +
        "<img class=\"button_arrow next\" src='img/arrow_down.png' onclick='moveBot(this)'></div>";
    $('#gameBlock').append(text);

    showPlayerInfo();
}

function showPlayerInfo() {
    var text,name;
    var id = $('input[type=radio][name=player_radio]:checked').attr('id');
    var players = allPlayers;

    for (var i=0; i < players.length; i++) {
        if (i===(id-1)) {
        text += "<div class='col-2 player_detail'><div class='team_card' style='width: 100%'>" +
            "<img src='img/players/" + players[i].Image + "'><br>" +
            "<div class='team_info'>" +
            "<span>Name: " + players[i].Name + "</span><br>" +
            "<span>Position: " + players[i].Position + "</span><br>" +
            "<span>Age: " + players[i].Age + "</span><br>" +
            "<span>About: " + players[i].About + "</span>" +
            "</div>" +
        "</div></div>";
        text+= "<div class='col-3 player_about'>" +
            "<div class='team_action row'><ul class='list wdt100'>" +
            "<li><button onclick='buyPlayer("+players[i].Id+","+players[i].Cost+","+players[i].Fans+")'><i>Купить</i><span>"+players[i].Cost+"$</span></button></li>" +
            "<li>Фанов: <span>"+players[i].Fans+"</span></li>" +
            "<li>ЗП: <span>"+players[i].Salary+"$</span></li>" +
            "</ul></div>" +
        "</div>";
        }
    }

    $('.player_detail').remove();
    $('.player_about').remove();
    $('#gameBlock').append(text);
}

function scrollList(id) {
    // $('#player_list').animate({
    //     scrollTop: $("#"+id).offset().bottom-10
    // }, 100);
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

function buyPlayer(id,cost,army) {
    var count = Object.keys(urTeam).length;
    if ((count<5)&&(cash>=cost)) {
        urTeam.push({'Id':String(id)});
        cash = cash - cost;
        fans = fans + army;
        updateVariables();
        //зробити модальне окно для вибору ролі гравців
        //поміняти(зменшити) його стати (внутрі команди), єслі не його роль
        //прийдеться стати ігроків записувати в urTeam або перезаписувати в allPlayers
        //+ закинути в cookie
        showPlayers();
    }
    else {
        alert("NO!");
    }
}

function kickPlayers(Ids) {
    Ids = Array;
    Ids = [{'Id':'2'}, {'Id':'5'}, {'Id':'14'}];
    for (var i=0; i < urTeam.length; i++) {
        for (var j=0; j < Ids.length; j++) {
            if (Ids[j].Id===urTeam[i].Id) {console.log(urTeam[i].Id); delete urTeam[i].Id;}
        }
    }
    showTeam();
}
