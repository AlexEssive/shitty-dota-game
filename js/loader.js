//load libs
loadScript("plugins/bootstrap.min.js");

//load data
loadScript("data/data.js");

//load game scripts
loadScript("game/main.js");
loadScript("game/players.js");
loadScript("game/days.js");
loadScript("game/market.js");
loadScript("game/team.js");
loadScript("game/matches.js");
loadScript("game/context.js");
loadScript("game/user.js");
loadScript("game/upload.js");
loadScript("game/cookies.js");
loadScript("game/modal.js");

function loadScript(script) {
    $.getScript('../js/' + script);
}
