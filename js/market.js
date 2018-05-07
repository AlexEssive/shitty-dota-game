function showPlayers() {
    var players = allPlayers;
    refreshGameBlock();
    for (var i=0; i < players.length; i++) {
        $('#gameBlock').append("<div class='player_card'>" +
            players[i].Name +
            "</div>");
    }
}