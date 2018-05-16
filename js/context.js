function menuRest(id) {
    $(".menu").remove();
    var nid = $(id).closest('div');
    console.log(nid);
}

$(document).mouseup(function (e) {
    var container = $("#contextMenu");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});