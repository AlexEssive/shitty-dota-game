function startNewDay()
{
    var fansIncome = 1;
    fans += fansIncome;
    currentDay++;
    if (currentDay % 30 === 0) {
     cash += income;
    }
    updateVariables();
}

function countSponsorsCash() {
    //буде вліяти тільки медійка команди, так як вона буде залежити від тих ж параметрів
    //плюс fansIncome
    //плюс якийсь рейтінг(топ) серед ін. команд
}

function countFansIncome() {
    //буде вліяти медійка команди:
        //стриминг(player*n -> team)
        //фотосет(team)
        //пиар(team)
        //пост(team)
        //решафл(team)
}

function countTeamCash() {
    //countSponsorsCash(сюди входить і countFansIncome)
    //countTournamentCash
}

function countTournamentCash() {
    //cash за призові місця турнірів
}