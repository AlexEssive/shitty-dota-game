function menuRest(id) {
    $(".menu").remove();
    var nid = $(id).closest('div');
    console.log(nid);
}

$(document).mouseup(function (e) {
    var container = $("#contextMenu");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

function showMenu(top,left,id) {
    $('.menu').remove();

    $('#'+id).append("\t<menu id='contextMenu' class=\"menu\">\n" +
        "<li class=\"menu-item\">\n" +
        "<button type=\"button\" class=\"menu-btn\" onclick=\"menuRest(this);\">\n" +
        "<i class=\"fa fa-folder-open\"></i>\n" +
        "<span class=\"menu-text\">Отдыхать</span>\n" +
        "</button>\n" +
        "</li>\n" +
        "<li class=\"menu-item\">\n" +
        "<button type=\"button\" class=\"menu-btn\" onclick=\"menuRest(this);\">\n" +
        "<span class=\"menu-text\">Анализ реплеев</span>\n" +
        "</button>\n" +
        "</li>\n" +
        "<li class=\"menu-item\">\n" +
        "<button type=\"button\" class=\"menu-btn\" onclick=\"menuRest(this);\">\n" +
        "<i class=\"fa fa-reply\"></i>\n" +
        "<span class=\"menu-text\">Разработка стратегий</span>\n" +
        "</button>\n" +
        "</li>\n" +
        "<li class=\"menu-item\">\n" +
        "<button type=\"button\" class=\"menu-btn\" onclick=\"menuRest(this);\">\n" +
        "<i class=\"fa fa-download\"></i>\n" +
        "<span class=\"menu-text\">Тренироваться</span>\n" +
        "</button>\n" +
        "</li>\n" +
        "<li class=\"menu-item\">\n" +
        "<button type=\"button\" class=\"menu-btn\" onclick=\"menuRest(this);\">\n" +
        "<i class=\"fa fa-edit\"></i>\n" +
        "<span class=\"menu-text\">Стримить</span>\n" +
        "</button>\n" +
        "</li>\n" +
        "<li class=\"menu-item\">\n" +
        "<button type=\"button\" class=\"menu-btn\" onclick=\"menuRest(this);\">\n" +
        "<i class=\"fa fa-trash\"></i>\n" +
        "<span class=\"menu-text\">Психолог</span>\n" +
        "</button>\n" +
        "</li>\n" +
        "</menu>");

    $(".menu").css({top: 40,  position:'absolute'});
    $(".menu").show();
}