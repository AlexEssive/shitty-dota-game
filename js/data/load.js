loadData = new LoadData();

function LoadData() {

    this.loadTeam = function () {
        setCookie("team", JSON.stringify(urTeam));
    }
}

function initLoad() {
    saveData.saveTeam();
}
