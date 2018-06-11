function buyPlayer(id,cost,army,role) {

    var norole = false, notwin = false;
    var count = Object.keys(urTeam).length;
    var Skill='55',Social='55',Media='55';
    var percent = getRndInteger(50,70); // процент втрати Skilla

    if ((count<5)&&(cash>=cost)) {
        //перевірка на повторну роль
        for(var i=0; i<urTeam.length; i++) {
            if (parseInt(urTeam[i].Position)===role) {norole = true; break;} else norole = false;
        }
        //перевірка на повторного гравця
        for(var i=0; i<urTeam.length; i++) {
            if (parseInt(urTeam[i].Id)===id) {notwin = true; break;} else notwin = false;
        }
        if (!norole) {
            if (!notwin) {
                //зменшення параметра Skill, якщо вибрати не його роль
                for (var i=0; i<allPlayers.length; i++) {
                    if (parseInt(allPlayers[i].Id)===id) {
                        if (parseInt(allPlayers[i].Position)!==role) Skill = Math.round(Skill - (Skill*percent)/100);
                    }
                }
                urTeam.push({'Id':String(id), 'Skill':Skill, 'Social':Social, 'Media':Media, 'Position':String(role)});
                cash = cash - cost;
                fans = fans + army;
                updateVariables();

                document.getElementById('myModal').style.display = "none";
                showPlayers();
            } else alert("Такой игрок уже в команде!");
        } else alert("Виберите другую роль!");
    }
    else {
        alert("Число игроков - ограничено!");
    }
}

function kickPlayers() {

    var selected = [];
    $('.team_card input:checked').each(function() {
        selected.push($(this).attr('name'));
    });

    if (selected.length > 0) {
        for (var i=0; i < urTeam.length; i++) {
            for (var j=0; j<selected.length; j++) {
                if (selected[j]===urTeam[i].Id) { delete urTeam[i].Id; }
            }
        }
    } else { alert('Выберите хотя бы одного игрока!'); }
    showTeam();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
