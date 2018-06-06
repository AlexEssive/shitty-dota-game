income = 100;
cash = 111000;
fans = 228;
currentDay = 1;

$(document).ready(function() {
    refreshGameBlock();
    updateVariables();
    if (getCookie("userName")!==undefined) {showTeam(); console.log(getCookie("userName"));} else {showLoginForm(); console.log("Login first!");}

    //шо ета?
    setInterval(function(){
        $('#string>span').addClass('blink_on');
        setTimeout(function(){$('#string>span').removeClass('blink_on')},1500);
    },6000)
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

