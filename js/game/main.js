income = getCookie('income');
cash = getCookie('cash');
fans = getCookie('fans');
currentDay = getCookie('currentDay');

$(document).ready(function() {
    refreshGameBlock();
    updateVariables();
    initGame();
    //шо ета? // ya hz // аху*нно розробляєм
    // setInterval(function(){
    //     $('#string>span').addClass('blink_on');
    //     setTimeout(function(){$('#string>span').removeClass('blink_on')},1500);
    // },6000)
});

function refreshGameBlock()
{
    $('#gameBlock').remove();
    $('.main-holder').append("<div id='gameBlock' class='main_block nolist row'></div>");
}

function updateVariables() {
    $("#income").text('+' + income + '$');
    $("#cash").text(cash + '$');
    $("#fans").text(fans);
    $("#day").text(currentDay);

    teamName = getCookie('teamName');
    teamLogo = getCookie('teamLogo');
    nextTournament = getCookie('nextTournament');

    $("#team-name").text(teamName);
    $("#team-logo").attr('src',teamLogo);
}

function initGame() {
    if (getCookie("userName")!==undefined) {
        initLoad();
    } else {
        showLoginForm();
    }
}

// анімація набігших фанатів(обратно тоже работає)
//     var start_fans = parseInt($('#fans').text);
//     var finish_fans = fans;
//
//     $('#fans').animate({ num: finish_fans - start_fans}, {
//         duration: 3000,
//         step: function (num){
//             this.innerHTML = parseInt(num + start_fans)
//         }
//     });
// }

