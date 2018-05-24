function showLoginForm() {
    refreshGameBlock();
    var text="";
    text+="<div class='container'>";
    text+="<div class='row login_top'><div class='offset-3 col-6'><button>Создать команду</button></div></div>";
    text+="<div class='row login_main'><div class='offset-3 col-6 login_form pad0'>" +
        "<ul class='list'>" +
            "<li>op</li>" +
            "<li>op</li>" +
            "<li>op</li>" +
            "<li>op</li>" +
        "</ul>" +
    "</div></div>";
    text+="</div>";
    $('#gameBlock').append(text);
}