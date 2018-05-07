var allPlayers = [{'Id':'1','Name':'Lil','Position':'Четверка(ЛУЧШАЯ)', 'Age':'22', 'About': 'ЧСВ', 'Image':'lil.png'},
    {'Id':'2','Name':'Dendi','Position':'МИД', 'Age':'27', 'About': 'Зачастую выигрываю', 'Image':'dendi.png'},
    {'Id':'3','Name':'Papich','Position':'Стример', 'Age':'27', 'About': 'Впопич', 'Image':'papich.png'},
    {'Id':'4','Name':'Miracle','Position':'Тащила', 'Age':'18', 'About': 'Тащила', 'Image':'miracle.png'},
    {'Id':'5','Name':'RAMZES666','Position':'Роум', 'Age':'11', 'About': 'Малой', 'Image':'ramzes.png'}
    ];

function showTeam() {
    var team = allPlayers;
    refreshGameBlock();
    for (var i=0; i < team.length; i++) {
        $('#gameBlock').append("<div class='team_card'>" +
            "<img src='img/players/" + team[i].Image + "'><br>" +
                "<div class='team_info'>" +
                "<span>Name: " + team[i].Name + "</span><br>" +
                "<span>Position: " + team[i].Position + "</span><br>" +
                "<span>Age: " + team[i].Age + "</span><br>" +
                "<span>About: " + team[i].About + "</span>" +
                "</div>" +
            "</div>");
    }
}
