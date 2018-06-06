saveTeam = new SaveTeam();

function SaveTeam() {

    this.saveData = function () {
        setCookie("userName", userName);
        setCookie("teamName", teamName);
        setCookie("teamLogo", teamLogo);
    };

    this.savePlayers = function () {
        if (urTeam.length == 0) {
            setCookie("players", false);
        } else {
            setCookie("players", JSON.stringify(urTeam));
        }
    };
}

function initSave() {
    saveTeam.saveData();
    saveTeam.savePlayers();
}
