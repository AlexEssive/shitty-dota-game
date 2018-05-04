var allPlayers = [{'Id':'1','Name':'Lil','Position':'Четверка(ЛУЧШАЯ)', 'Age':'22', 'About': 'ЧСВ', 'Image':'lil.png'},
    {'Id':'2','Name':'Dendi','Position':'МИД', 'Age':'27', 'About': 'Зачастую выигрываю', 'Image':'dendi.png'},
    {'Id':'3','Name':'Papich','Position':'Стример', 'Age':'14', 'About': 'Впопич', 'Image':'papich.png'},
    {'Id':'4','Name':'Papich','Position':'Стример', 'Age':'14', 'About': 'Впопич', 'Image':'papich.png'},
    {'Id':'5','Name':'Papich','Position':'Стример', 'Age':'14', 'About': 'Впопич', 'Image':''}
    ];

function showTeam() {
    var players = allPlayers;
    $('.player_card').remove();
    for (var i=0; i < players.length; i++) {
        $('.team_list').append("<div class='player_card'>" +
            "<img src='img/players/" + players[i].Image + "'><br>" +
            "<span>Name: " + players[i].Name + "</span><br>" +
            "<span>Position: " + players[i].Position + "</span><br>" +
            "<span>Age: " + players[i].Age + "</span><br>" +
            "<span>About: " + players[i].About + "</span>" +
            "</div>");
    }
}

function showPlayers() {
    var players = allPlayers;
    $('.player_card').remove();
    for (var i=0; i < players.length; i++) {
        $('.team_list').append("<div class='player_card'>" +
            "<img src='img/players/" + players[i].Image + "'><br>" +
            "<span>Name: " + players[i].Name + "</span><br>" +
            "<span>Position: " + players[i].Position + "</span><br>" +
            "<span>Age: " + players[i].Age + "</span><br>" +
            "<span>About: " + players[i].About + "</span>" +
            "</div>");
    }
}