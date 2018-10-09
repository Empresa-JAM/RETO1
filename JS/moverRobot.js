function enviarMM(nombrefun) {
    var datos = $("#"+nombrefun).serialize();
    $.ajax({
        type: "POST",
        data: datos,
        success: function (data) {},
        error: function () {
            document.write("Error");
        }
    });
    return false;
}