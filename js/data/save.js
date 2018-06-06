saveTeam = new SaveTeam();

function SaveTeam() {

    this.savePlayerData = function () {
        setCookie("userName", userName);
        setCookie("teamName", teamName);
        setCookie("teamLogo", teamLogo);
    };

    this.savePlayers = function () {
        if (!urTeam.length) {
            setCookie("players", Array());
        } else {
            setCookie("players", JSON.stringify(urTeam));
        }
    };
}

function initSave() {
    saveTeam.savePlayerData();
    saveTeam.savePlayers();
}
