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
    {'Id':'10','Name':'NS','Position':'5', 'Age':'11', 'About': 'Победитель Диффенса. Лучшие фишки EU', 'Image':'ns.jpg'},
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
        var n = i+1;
        $('#gameBlock').append("<div id='card"+n+"' class='team_card' onclick='playerAction(this);'>" +
            "<div id='status"+n+"'><span>Status</span></div>" +
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
    console.log(id);
    $(".menu").css({top: 40,  position:'absolute'});
    $(".menu").show();
}

function changeStatus(id) {
    $('#status'+id).find("span").remove();
    $('#status'+id).append("<span>Work</span>");
}


