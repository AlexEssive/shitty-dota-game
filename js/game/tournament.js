function createTournament(id) {

    nextTournament = id++; setCookie("nextTournament",nextTournament);
    var tournaments = allTournaments;
    var error = false, teams=Array(), team_id=1;

    var name = tournaments[parseInt(id)].Name;
    var date1 = tournaments[parseInt(id)].Date_start;
    var date2 = tournaments[parseInt(id)].Date_end;
    var prize = tournaments[parseInt(id)].Prize;
    var count = tournaments[parseInt(id)].Members;

    for (var i=0; i < count-1; i++) {
        if (count<=allTeam.length)
        while(teams.indexOf(team_id)>=0) {
            team_id=getRndInteger(1,allTeam.length);
        } else error=true;
        teams.push(team_id);
    }

    if (error) {alert("В базе данных нет достаточного количества команд!"); return false;}

    console.log("'" + name + "', " + date1 + " - " + date2 + ", " + prize + "$, " + count + " команд");

    var currentTournament = [
        {
            "Name":name,
            "Date_start":date1,
            "Date_end":date2,
            "Prize":prize,
            "Members":count,
            "Teams":teams
        }
    ];

    setCookie("currentTournament", JSON.stringify(currentTournament));

    return teams;
}

function getRandomEnemy() {
    var enemies = JSON.parse(getCookie("currentTournament"))[0].Teams;
    return enemies[Math.floor(Math.random()*enemies.length)];
}

function checkTournament(id) {
    var result=false; //nu xz
    allTournaments[id].Date_start===currentDay ? result=true : result=false;
    return result;
}

function playTournament() {
    var result = false;
    // win - виграв турнір
    // lose - програв турнір
    // next - турнір продовжується

    //1 - визначимо поточного супротивника
    var enemies = JSON.parse(getCookie("currentTournament"))[0].Teams;
    var current_enemy = getRandomEnemy();

    //2 - видалимо отриманого супротивника з масива
    var index = enemies.indexOf(current_enemy);
    if (index > -1) { enemies.splice(index, 1); }

    //3 - зіграємо з ним матч
    var play = playMatch(current_enemy);

    //4 - якщо ми виграли матч
    if (play.outcome) {

        //5 - визначимо переможців з інших команд
        if (enemies.length===0) var new_count_teams=0;
        else new_count_teams = Math.round((enemies.length+1) / 2);

        //6 - створимо новий масив з учасників-переможців (пока це просто n-перших гравців з масива)
        var new_enemies = enemies.slice(0, new_count_teams);
        console.log(new_count_teams + ": " + new_enemies);

        //7 - запишемо в кукі учасників - переможців
        var currentTournament = [
            {
                "Name":JSON.parse(getCookie("currentTournament"))[0].Name,
                "Date_start":JSON.parse(getCookie("currentTournament"))[0].Date_start,
                "Date_end":JSON.parse(getCookie("currentTournament"))[0].Date_end,
                "Prize":JSON.parse(getCookie("currentTournament"))[0].Prize,
                "Members":new_count_teams,
                "Teams":new_enemies
            }
        ];
        setCookie("currentTournament", JSON.stringify(currentTournament));

        //8 - перевірка чи ми ше не виграли турнір (win - виграли)
        enemies.length === 0 ? result = "win" : result = "next";
    }
    //9 - якщо програли матч, то вилітаємо з турніра (lose - програли)
    else { result = "lose"; }

    //10 - якщо win або lose - закрити турнір
    if (result==="win" || result==="lose") { deleteCookie("currentTournament"); }
    if (result==="win") alert("You win!"); if (result==="lose") alert("You lose!");

    return result;
}

function showTournamentGame() {
    //визначити БО поточного матчу
    //вивести результат по всім іграм зустрічі
    //вивести додаткову інфу
}

function showTournament() {
    refreshGameBlock();
    var text="";

    var options = getTournaments();

    text="<div class='container mar0 wdt100 tournaments_card'><div class='row'>" +
            "<div class='col-4'><select id='tournament_id'>" +
                options +
            "</select></div>" +
            "<div class='col-4'><button onclick='showCreateTournament()'>Создать турнир</button></div>" +
            "<div class='col-4'><button onclick='showPlayTournament()'>Сыграть матч турнира</button></div>" +
        "</div>" +
        "<div class='row '>" +
            "<div id='current_tournament' class='wdt100 about_tournament'></div>" +
        "</div>" +
        "<div class='row'>" +
            "<ul id='result_table'></ul>" +
        "</div>" +
     "</div>";

    $('#gameBlock').append(text);
}

function showCreateTournament() {
    var text="";
    var id = parseInt($("#tournament_id option:selected").val());

    createTournament(id);
    var tname=JSON.parse(getCookie("currentTournament"))[0].Name;
    var tdate1=JSON.parse(getCookie("currentTournament"))[0].Date_start;
    var tdate2=JSON.parse(getCookie("currentTournament"))[0].Date_end;
    var tprize=JSON.parse(getCookie("currentTournament"))[0].Prize;
    var tteams=JSON.parse(getCookie("currentTournament"))[0].Members;
    var tmas=JSON.parse(getCookie("currentTournament"))[0].Teams;

    text = "<div class='row'>" +
            "<div class='col-2'>"+tname+"</div>" +
            "<div class='col-2'>"+tdate1+"-"+tdate2+"</div>" +
            "<div class='col-2'>"+tprize+"$</div>" +
            "<div class='col-2'>"+tteams+" команд</div>"+
            "<div class='col-2'>"+tmas+"</div>"+
        "</div>";

    $('#current_tournament').html(text);

    $('#result_table').html("");
}

function showPlayTournament() {
    var text="";
    var tteams=JSON.parse(getCookie("currentTournament"))[0].Members;
    var tmas=JSON.parse(getCookie("currentTournament"))[0].Teams;
    playTournament();
    text = "<li>1/"+tteams+": "+tmas+"</li>";
    $('#result_table').append(text);
}

function getTournaments() {
    var tournaments = allTournaments;
    var list="";
    for (var i=0; i < tournaments.length; i++) {
        list+="<option value='"+i+"'>" + tournaments[i].Name + "</option>";
    }
    return list;
}