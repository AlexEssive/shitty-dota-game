function showLoginForm() {
    refreshGameBlock();
    var text="";
    text+="<div class='container'>";
    text+="<div class='row login_top'><div class='offset-3 col-6 pad0'><button>Создайте команду</button></div></div>";
    text+="<div class='row login_main'><div class='offset-3 col-6 login_form pad0'>" +
        "<ul class='list'>" +
            "<li><a href='' class='float-left'><img src='img/dota.png' alt='nologo'></a><a href='' class='float-right'><img src='img/settings.png' alt='nologo'></a></li>" +
            "<li><span>Ваш никнейм</span><br><input type='text' value=''></li>" +
            "<li><span>Название команды</span><br><input type='text' value=''></li>" +
            "<li><img src='img/nologo.jpg' alt='nologo' class='logo_team'><label class='custom-file'> <input value='Choose' type='file' id='file' class='custom-file-input'> <span class='custom-file-control'>обзор...</span> </label></li>" +
            "<li><a href='' class='float-right'><img src='img/arrow_right.png'></a></li>" +
        "</ul>" +
    "</div></div>";
    text+="</div>";
    $('#gameBlock').append(text);
}