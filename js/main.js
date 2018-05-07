function showSettings() {
    refreshGameBlock();
    $('.main_block').append("<div class='settings'>" +
        "<h2>Настройки</h2>" +
        "</div>"
    );
}

function refreshGameBlock() {
    $('#gameBlock').remove();
    $('.main-holder').append("<div id='gameBlock' class='main_block nolist row'></div>");
}

$(document).ready(function() {
   refreshGameBlock();
   showTeam();
});
