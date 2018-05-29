var allMatches = [
    {'Id':'1', 'Team':'5', 'Type':'bo3', 'Date':'10.05.2018'},
    {'Id':'2', 'Team':'2', 'Type':'bo2', 'Date':'10.05.2018'},
    {'Id':'3', 'Team':'3', 'Type':'bo1', 'Date':'10.05.2018'},
    {'Id':'4', 'Team':'4', 'Type':'bo5', 'Date':'13.05.2018'},
    {'Id':'5', 'Team':'6', 'Type':'bo1', 'Date':'14.05.2018'}
];

var allTeam = [
    {'Id':'1', 'Name':'Na`Vi', 'Country':'Ukraine', 'Logo':'navi.png', 'Skill':'100', 'Social':'100', 'Media':'100'},
    {'Id':'2', 'Name':'VP', 'Country':'Russia', 'Logo':'vp.png', 'Skill':'100', 'Social':'100', 'Media':'100'},
    {'Id':'3', 'Name':'EG', 'Country':'USA', 'Logo':'eg.png', 'Skill':'100', 'Social':'100', 'Media':'100'},
    {'Id':'4', 'Name':'OG', 'Country':'USA', 'Logo':'og.png', 'Skill':'100', 'Social':'100', 'Media':'100'},
    {'Id':'5', 'Name':'Vega', 'Country':'Russia', 'Logo':'vega.png', 'Skill':'100', 'Social':'100', 'Media':'100'},
    {'Id':'6', 'Name':'Empire', 'Country':'Russia', 'Logo':'empire.png', 'Skill':'100', 'Social':'100', 'Media':'100'},
    {'Id':'7', 'Name':'Liquid', 'Country':'USA', 'Logo':'liquid.png', 'Skill':'100', 'Social':'100', 'Media':'100'},
    {'Id':'8', 'Name':'LGD', 'Country':'China', 'Logo':'lgd.png', 'Skill':'100', 'Social':'100', 'Media':'100'},
    {'Id':'9', 'Name':'VG', 'Country':'China', 'Logo':'vg.png', 'Skill':'100', 'Social':'100', 'Media':'100'},
    {'Id':'10', 'Name':'NewBee', 'Country':'China', 'Logo':'newbee.png', 'Skill':'100', 'Social':'100', 'Media':'100'}
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