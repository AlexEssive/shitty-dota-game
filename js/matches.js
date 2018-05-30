var allMatches = [
    {'Id':'1', 'Team':'5', 'Type':'bo3', 'Date':'10.05.2018'},
    {'Id':'2', 'Team':'2', 'Type':'bo2', 'Date':'10.05.2018'},
    {'Id':'3', 'Team':'3', 'Type':'bo1', 'Date':'10.05.2018'},
    {'Id':'4', 'Team':'4', 'Type':'bo5', 'Date':'13.05.2018'},
    {'Id':'5', 'Team':'6', 'Type':'bo1', 'Date':'14.05.2018'}
];

var allTeam = [
    {'Id':'1', 'Name':'Na`Vi', 'Country':'Ukraine', 'Logo':'navi.png', 'Teamplay':'10', 'Strategy':'10', 'Atmosphere':'10'},
    {'Id':'2', 'Name':'VP', 'Country':'Russia', 'Logo':'vp.png', 'Teamplay':'100', 'Strategy':'100', 'Atmosphere':'100'},
    {'Id':'3', 'Name':'EG', 'Country':'USA', 'Logo':'eg.png', 'Teamplay':'30', 'Strategy':'100', 'Atmosphere':'10'},
    {'Id':'4', 'Name':'OG', 'Country':'USA', 'Logo':'og.png', 'Teamplay':'40', 'Strategy':'50', 'Atmosphere':'90'},
    {'Id':'5', 'Name':'Vega', 'Country':'Russia', 'Logo':'vega.png', 'Teamplay':'40', 'Strategy':'30', 'Atmosphere':'10'},
    {'Id':'6', 'Name':'Empire', 'Country':'Russia', 'Logo':'empire.png', 'Teamplay':'50', 'Strategy':'60', 'Atmosphere':'30'},
    {'Id':'7', 'Name':'Liquid', 'Country':'USA', 'Logo':'liquid.png', 'Teamplay':'80', 'Strategy':'90', 'Atmosphere':'100'},
    {'Id':'8', 'Name':'LGD', 'Country':'China', 'Logo':'lgd.png', 'Teamplay':'100', 'Strategy':'70', 'Atmosphere':'40'},
    {'Id':'9', 'Name':'VG', 'Country':'China', 'Logo':'vg.png', 'Teamplay':'50', 'Strategy':'70', 'Atmosphere':'30'},
    {'Id':'10', 'Name':'NewBee', 'Country':'China', 'Logo':'newbee.png', 'Teamplay':'60', 'Strategy':'70', 'Atmosphere':'80'}
];

function showMatches() {
    var matches = allMatches;
    refreshGameBlock();

    var list="<div class='matches_list'>";
    for (var i=0; i < matches.length; i++) {
        list+="<span class='bold'>"+matches[i].Date + ": </span><br>";
        for (var j = 0; j < matches.length; j++) {
            if (matches[i].Date===matches[j].Date)
                list+=getTeamName(matches[j].Team)+", "+matches[j].Type+"<br>";
        }
        list+="<br>";
    }
    list+="</div>";

    $('#gameBlock').append(list);
}

function getTeamName(id) {
    var team = allTeam;
    for (var i=0; i < team.length; i++) {
        if (i===id) var name = team[i].Name;
    }
    return name;
}

function countTeamRating(id) {
    for (var i=0; i < allTeam.length; i++) {
        if(id===allTeam[i].Id) {
            var rating = Math.round(( parseInt(allTeam[i].Teamplay) + parseInt(allTeam[i].Strategy) + parseInt(allTeam[i].Atmosphere) ) / 3);
            break;
        }
    }
    return rating;
}

function countUrRating() {
    var rating = Math.round(( parseInt(teamStats.Teamplay) + parseInt(teamStats.Strategy) + parseInt(teamStats.Atmosphere) ) / 3);
    return rating;
}

function playMatch(id) {
    //дописати рандомний виграш/програш
    var result;
    countUrRating() > countTeamRating(id) ? result=true : result=false;
    return result;
}