loadData = new LoadData();

function LoadData() {

    this.loadPlayerData = function () {
        userName = getCookie('userName');
        teamName = getCookie('teamName');
        teamLogo = getCookie('teamLogo');
    };

    this.loadTeam = function () {
        urTeam = JSON.parse(getCookie('players'));
    }
}

function initLoad() {
    loadData.loadPlayerData();
    loadData.loadTeam();
}
