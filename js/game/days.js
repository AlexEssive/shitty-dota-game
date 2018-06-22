function startNewDay()
{
    // if (getCookie("currentTournament")!=="") {
    //     var playTournament = playTournament();
    //     alert(playTournament);
    // } else
    var playQv = playQvGame();
    playQv.outcome ? alert("Win vs "+ playQv.enemy + " - " + playQv.message) : alert("Lose vs "+ playQv.enemy + " (" + playQv.message + ")");

    fansIncome = countFansIncome();
    playQv.outcome ? fans = parseInt(fans) + fansIncome : fans = parseInt(fans) - fansIncome;
    fans < 0 ? fans = 0 : false;

    currentDay++;
    if (currentDay % 30 === 0) {
        //createTournament(1);
        income = countSponsorsCash();
        cash += income;
    }

    updateVariables();
    initSave();
}

function countSponsorsCash() {
    var result = getRndInteger(1, 100);
    //буде вліяти тільки медійка команди, так як вона буде залежити від тих ж параметрів
    //плюс fansIncome
    //плюс якийсь рейтінг(топ) серед ін. команд
    return result;
}

function countFansIncome() {
    var result = getRndInteger(1, 100);
    //буде вліяти медійка команди:
        //стриминг(player*n -> team)
        //фотосет(team)
        //пиар(team)
        //пост(team)
        //решафл(team)
    return result;
}

function countTeamCash() {
    //countSponsorsCash(сюди входить і countFansIncome)
    //countTournamentCash
}

function countTournamentCash() {
    //cash за призові місця турнірів
}