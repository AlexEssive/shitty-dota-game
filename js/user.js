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
            "<li><a onclick='newUser();' class='float-right pointer'><img src='img/arrow_right.png'></a></li>" +
        "</ul>" +
    "</div></div>";
    text+="</div>";
    // $("body").append(text);
    $('#gameBlock').append(text);
}

function newUser() {
    userName =  $("#user-name").val();
    teamName =  $("#team-cap").val();
    teamLogo =  $("#output").attr('src');

    urTeam = Array();
    cash = 1000;
    fans = 0;
    currentDay = 1;

    setCookie("userName",userName);
    setCookie("teamName",teamName);
    setCookie("teamLogo",teamLogo);

    // document.cookie = "userName="+userName;
    // document.cookie = "teamName="+teamName;
    // document.cookie = "teamLogo="+teamLogo;

    $("#team-logo").attr('src',teamLogo);
    $("#team-name").text(teamName);

    // $("body").load("main.html");
    // $("body").append('<object type="text/html" data="/main.html" ></object>');
    // document.getElementsByTagName("body").innerHTML='<object type="text/html" data="/main.html" ></object>';

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
        "<li><a onclick='newUser();' class='float-right pointer'><img src='img/arrow_right.png'></a></li>" +
        "</ul>" +
        "</div></div>";
    text+="</div>";
    $('#gameBlock').append(text);
}