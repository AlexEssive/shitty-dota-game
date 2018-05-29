var income = 100;
var cash = 111000;
var fans = 228;
var fansIncome = 1;
var currentDay = 1;

$(document).ready(function() {
    refreshGameBlock();
    updateVariables();
    showLoginForm();

    setInterval(function(){
        $('#string>span').addClass('blink_on');
        setTimeout(function(){$('#string>span').removeClass('blink_on')},1500);
    },6000)
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
