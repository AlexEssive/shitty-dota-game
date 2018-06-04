function showEmpty() {
    refreshGameBlock();
    var text = "";

    text =  "<div class='col-4'><h2>Modal Example</h2>" +
        "<button id=\"myBtn\" onclick='showModal();'>Open Modal</button>" +
        "<div id=\"myModal\" class=\"modal\">" +
        "  <div class=\"modal-content\">" +
        "    <span class=\"close\">&times;</span>" +
        "    <p>Выберите роль</p>" +
        "    <img onclick='moveRole(false);' class='float-left button_arrow' src='img/arrow_up.png'>" +
        "    <i id='text_role' class='text-center'>" + 1 + "</i>" +
        "    <img onclick='moveRole(true);' class='float-right button_arrow' src='img/arrow_down.png'>" +
        "  </div>" +
        "</div></div>";

    $('#gameBlock').append(text);
}

function showModal() {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function moveRole(where) {
    var n = parseInt($('#text_role').text());
    console.log(n);
    if(where) {
        if (n<5) var res = n+1; else var res = 1;
    } else {
        if (n>1) var res = n-1; else var res = 5;
    }
    console.log(res);
    $('#text_role').text(res);
}