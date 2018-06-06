function createModal() {
    refreshGameBlock();
    var text = "";

    text =  "<div class='col-4'><h2>Modal Example</h2>" +
        "<button id=\"myBtn\" onclick='showModal();'>Open Modal</button>" +
        "</div>";

    $('#gameBlock').append(text);
}

function showModal(id,cost,army) {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
        var role = parseInt($('#text_role').text());
        buyPlayer(id,cost,army,role);
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function moveRole(where) {
    var n = parseInt($('#text_role').text());
    if(where) {
        if (n<5) var res = n+1; else var res = 1;
    } else {
        if (n>  1) var res = n-1; else var res = 5;
    }
    $('#text_role').text(res);
}