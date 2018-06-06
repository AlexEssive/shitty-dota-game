var userName = "admin";
var teamName = "noteam";
var teamLogo = "img/nologo.png";

function showLoginForm() {
    refreshGameBlock();
    var text="";

    text+="<div class='container'>";
    text+="<div class='row login_top'><div class='offset-3 col-6 pad0'><button>Создайте команду</button></div></div>";
    text+="<div class='row login_main'><div class='offset-3 col-6 login_form pad0'>" +
        "<ul class='list'>" +
            "<li><a href='' class='float-left'><img src='img/dota.png' alt='nologo'></a><a href='' class='float-right'><img src='img/settings.png' alt='nologo'></a></li>" +
            "<li><span>Ваш никнейм</span><br><input id='user-name' type='text' value=''></li>" +
            "<li><span>Название команды</span><br><input id='team-cap' type='text' value=''></li>" +
            "<li><img id='output' src='img/nologo.jpg' alt='nologo' class='logo_team'>" +
                "<label class='custom-file'> " +
                    "<input type='file' id='file' accept='image/*' onchange='loadFile(event)' class='custom-file-input'> " +
                    "<span class='custom-file-control'>обзор...</span> " +
                "</label></li>" +
            "<li><a onclick='newUser();' class='float-right pointer'><img src='img/arrow_submit.png'></a></li>" +
        "</ul>" +
    "</div></div>";
    text+="</div>";

    // $("body").append(text);
    $('#gameBlock').append(text);
}

function newUser() {

    //кукі через раз работають, якось связано з серврером phpstorm
    //записуються, коли є кука з phpstorm session id
    // $("body").load("main.html");
    userName =  $("#user-name").val();
    teamName =  $("#team-cap").val();
    teamLogo =  $("#output").attr('src');

    urTeam = Array();
    cash = 111000;
    fans = 0;
    currentDay = 1;
    updateVariables();

    setCookie("userName",userName);
    setCookie("teamName",teamName);
    setCookie("teamLogo",teamLogo);

    $("#team-logo").attr('src',teamLogo);
    $("#team-name").text(teamName);

    showTeam();
}

function showProfile() {
    refreshGameBlock();
    var text="";
    text+="<div class='container'>";
    text+="<div class='row login_top'><div class='offset-3 col-6 pad0'><button>Профиль пользователя</button></div></div>";
    text+="<div class='row login_main'><div class='offset-3 col-6 login_form pad0'>" +
        "<ul class='list'>" +
        "<li><a href='' class='float-left'><img src='img/dota.png' alt='nologo'></a><a href='' class='float-right'><img src='img/settings.png' alt='nologo'></a></li>" +
        "<li><span>Ваш никнейм</span><br><input id='user-name' type='text' value='"+userName+"'></li>" +
        "<li><span>Название команды</span><br><input id='team-cap' type='text' value='"+teamName+"'></li>" +
        "<li><img id='output' src='"+teamLogo+"' alt='nologo' class='logo_team'>" +
            "<label class='custom-file'> " +
                "<input type='file' id='file' accept='image/*' onchange='loadFile(event)' class='custom-file-input'> " +
                "<span class='custom-file-control'>обзор...</span> " +
            "</label></li>" +
        "<li><a onclick='newUser();' class='float-right pointer'><img src='img/arrow_submit.png'></a></li>" +
        "</ul>" +
        "</div></div>";
    text+="</div>";
    $('#gameBlock').append(text);
}

function logoutUser() {
    deleteCookie("userName");
    deleteCookie("teamName");
    deleteCookie("teamLogo");
    //udaliti masiv s igrakiv
    location.reload();
}