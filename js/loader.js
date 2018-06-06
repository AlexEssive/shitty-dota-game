/**
 * Scripts loader
 *
 * Підключати скріпти тут
 * Порядок: plugins->libs->data->game
 * При другому порядку може вилізти пісюн в консоль
 * Не пхати всяку хєрню в рандомну категорію, потім без бутилки не розберешся
 */

/***********************************************/

/*** load libs (плагіни) ***/
loadScript("plugins/bootstrap.min.js");

/*** load libs (самописні інструменти, скріпти, які напряму не юзаються в грі) ***/
loadScript("libs/modal.js");
loadScript("libs/cookies.js");
loadScript("libs/upload.js");
loadScript("libs/context.js");

/*** load data (всьо, шо касається джсон дати і кукі менеджмента) ***/
loadScript("data/global_variables.js");
loadScript("data/players_data.js");
loadScript("data/save.js");

/*** load game scripts (ігрові скріпти) ***/
loadScript("game/main.js");
loadScript("game/players.js");
loadScript("game/days.js");
loadScript("game/market.js");
loadScript("game/team.js");
loadScript("game/matches.js");
loadScript("game/user.js");

/***********************************************/

//дуже сложна функція
function loadScript(script) {
    $.getScript('../js/' + script);
}
