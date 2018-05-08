function showPlayers() {
    var players = allPlayers;
    refreshGameBlock();
    var text ="<ul>";
    for (var i=0; i < players.length; i++) {
        text += "<li class='player_card'>" +
            players[i].Name +
            "</li>";
    }
    text += "<ul>";
    $('#gameBlock').append(text);
}