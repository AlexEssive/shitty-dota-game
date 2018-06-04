var allPlayers = [
    {'Id':'1','Name':'Lil','Position':'4', 'Age':'22', 'About': 'ЧСВ', 'Image':'lil.png', 'Skill':'55', 'Social':'5', 'Media':'100', 'Fans':'5100', 'Salary':'3500', 'Cost':'1500'},
    {'Id':'2','Name':'Dendi','Position':'2', 'Age':'27', 'About': 'Зачастую выигрываю', 'Image':'dendi.png', 'Skill':'10', 'Social':'90', 'Media':'100', 'Fans':'2100', 'Salary':'3500', 'Cost':'500'},
    {'Id':'3','Name':'Papich','Position':'1', 'Age':'27', 'About': 'Впопич', 'Image':'papich.png', 'Skill':'100', 'Social':'5', 'Media':'100', 'Fans':'2100', 'Salary':'2500', 'Cost':'400'},
    {'Id':'4','Name':'Miracle','Position':'5', 'Age':'18', 'About': 'Тащила', 'Image':'miracle.png', 'Skill':'100', 'Social':'35', 'Media':'90', 'Fans':'6100', 'Salary':'11500', 'Cost':'350'},
    {'Id':'5','Name':'RAMZES666','Position':'3', 'Age':'11', 'About': 'Малой', 'Image':'ramzes.png', 'Skill':'90', 'Social':'35', 'Media':'80', 'Fans':'2100', 'Salary':'7500', 'Cost':'5300'},
    {'Id':'6','Name':'Notail','Position':'1', 'Age':'22', 'About': 'BigDaddy', 'Image':'notail.png', 'Skill':'75', 'Social':'55', 'Media':'55', 'Fans':'2120', 'Salary':'1500', 'Cost':'10'},
    {'Id':'7','Name':'XBOST','Position':'1', 'Age':'27', 'About': 'Любитель бананов', 'Image':'xbost.png', 'Skill':'15', 'Social':'100', 'Media':'60', 'Fans':'2100', 'Salary':'2500', 'Cost':'200'},
    {'Id':'8','Name':'Noone','Position':'2', 'Age':'27', 'About': 'BabyRage', 'Image':'noone.png', 'Skill':'90', 'Social':'10', 'Media':'40', 'Fans':'3144', 'Salary':'3500', 'Cost':'500'},
    {'Id':'9','Name':'Solo','Position':'5', 'Age':'27', 'About': '322', 'Image':'solo.png', 'Skill':'10', 'Social':'80', 'Media':'90', 'Fans':'2100', 'Salary':'4500', 'Cost':'600'},
    {'Id':'10','Name':'NS','Position':'5', 'Age':'11', 'About': 'Победитель Диффенса. Лучшие фишки EU', 'Image':'ns.jpg', 'Skill':'10', 'Social':'70', 'Media':'90', 'Fans':'2440', 'Salary':'3500', 'Cost':'600'},
    {'Id':'11','Name':'Puppey','Position':'5', 'Age':'22', 'About': 'Fight me. Любитель мониторов', 'Image':'puppey.jpeg', 'Skill':'15', 'Social':'40', 'Media':'70', 'Fans':'100', 'Salary':'1500', 'Cost':'500'},
    {'Id':'12','Name':'Arteezy','Position':'2', 'Age':'27', 'About': 'BabyRage', 'Image':'arteezy.png', 'Skill':'80', 'Social':'40', 'Media':'90', 'Fans':'2100', 'Salary':'54400', 'Cost':'700'},
    {'Id':'13','Name':'EternalEnvy','Position':'1', 'Age':'27', 'About': 'Анимэ', 'Image':'ee.png', 'Skill':'20', 'Social':'10', 'Media':'60', 'Fans':'2500', 'Salary':'2500', 'Cost':'800'},
    {'Id':'14','Name':'Fng','Position':'5', 'Age':'18', 'About': 'Лучшая шестерка', 'Image':'fng.png', 'Skill':'15', 'Social':'60', 'Media':'60', 'Fans':'230', 'Salary':'3500', 'Cost':'5100'},
    {'Id':'15','Name':'Sumail','Position':'3', 'Age':'11', 'About': 'Малой', 'Image':'sumail.png', 'Skill':'90', 'Social':'35', 'Media':'90', 'Fans':'9100', 'Salary':'1500', 'Cost':'440'}
];

var stats = Array();
    stats['Скилл'] = 'Skill';
    stats['Социальность'] = 'Social';
    stats['Медийность'] = 'Media';

function showPlayers() {
    var players = allPlayers;
    var checked,name;
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
    var checked,name;
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
    var text,name;
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
