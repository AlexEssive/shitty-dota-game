var allPlayers = [
    {'Id':'1','Name':'Lil','Position':'4', 'Age':'22', 'About': 'ЧСВ', 'Image':'lil.png'},
    {'Id':'2','Name':'Dendi','Position':'2', 'Age':'27', 'About': 'Зачастую выигрываю', 'Image':'dendi.png'},
    {'Id':'3','Name':'Papich','Position':'1', 'Age':'27', 'About': 'Впопич', 'Image':'papich.png'},
    {'Id':'4','Name':'Miracle','Position':'5', 'Age':'18', 'About': 'Тащила', 'Image':'miracle.png'},
    {'Id':'5','Name':'RAMZES666','Position':'3', 'Age':'11', 'About': 'Малой', 'Image':'ramzes.png'},
    {'Id':'6','Name':'Notail','Position':'1', 'Age':'22', 'About': 'BigDaddy', 'Image':'notail.png'},
    {'Id':'7','Name':'XBOST','Position':'1', 'Age':'27', 'About': 'Любитель бананов', 'Image':'xbost.png'},
    {'Id':'8','Name':'Noone','Position':'2', 'Age':'27', 'About': 'BabyRage', 'Image':'noone.png'},
    {'Id':'9','Name':'Solo','Position':'5', 'Age':'27', 'About': '322', 'Image':'solo.png'},
    {'Id':'10','Name':'NS','Position':'5', 'Age':'11', 'About': 'Победимтель Диффенса. Лучшие фишки EU', 'Image':'ns.jpg'},
    {'Id':'11','Name':'Puppey','Position':'5', 'Age':'22', 'About': 'Fight me. Любитель мониторов', 'Image':'puppey.jpeg'},
    {'Id':'12','Name':'Arteezy','Position':'2', 'Age':'27', 'About': 'BabyRage', 'Image':'arteezy.png'},
    {'Id':'13','Name':'EternalEnvy','Position':'1', 'Age':'27', 'About': 'Анимэ', 'Image':'ee.png'},
    {'Id':'14','Name':'Fng','Position':'5', 'Age':'18', 'About': 'Лучшая шестерка', 'Image':'fng.png'},
    {'Id':'15','Name':'Sumail','Position':'3', 'Age':'11', 'About': 'Малой', 'Image':'sumail.png'}
];

function showTeam() {
    var team = allPlayers;
    refreshGameBlock();
    for (var i=0; i < 5; i++) {
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

