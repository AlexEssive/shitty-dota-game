var income = 100;
var cash = 1000;

var fans = 228;
var fansIncome = 1;

var currentDay = 1;

$(document).ready(function() {
    refreshGameBlock();
    updateVariables();
    showPlayers();

    $('.player_list li').click(function(){
        showPlayerInfo();
    });

    $('.prev').click(function(){
        $(this).parent().parent().find('input:checked').parent().prev().children('input').prop("checked", true);
        scrollList($(this).parent().parent().find('input:checked').parent().prev().children('input').attr('id'));
        showPlayerInfo();
    });

    $('.next').click(function(){
        $(this).parent().parent().find('input:checked').parent().next().children('input').prop("checked", true);
        scrollList($(this).parent().parent().find('input:checked').parent().prev().children('input').attr('id'));
        showPlayerInfo();
    });
});

function refreshGameBlock()
{
    $('#gameBlock').remove();
    $('.main-holder').append("<div id='gameBlock' class='main_block nolist row'></div>");
}

function updateVariables()
{
    $("#income").text('+' + income + '$');
    $("#cash").text(cash + '$');
    $("#fans").text(fans);
    $("#day").text(currentDay);
}

function showSettings()
{
    refreshGameBlock();
    $('.main_block').append("<div class='settings'>" +
        "<h2>Настройки</h2>" +
        "</div>"
    );
}
