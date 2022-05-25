
$(document).ready(function() {
    $("#ocult").click(function() {
        $("#texto2").toggle();
        $("#ocult").toggleClass("vermenos");
        $("#ocult").toggleClass("vermas");
    });

    $(".mas").click(function() {
        $(this).toggle();
        $(this).siblings("p").children("span").toggle();
        $(this).siblings(".menos").toggle();
    });

    $(".menos").click(function() {
        $(this).toggle();
        $(this).siblings("p").children("span").toggle();
        $(this).siblings(".mas").toggle();
    });

    $("#boton-caps").click(function() {

        var val = $("#capitulos").val();

        var total = Math.round(100 / (6 / val));

        $("p.resp").text("El porcentaje visto de la serie es un " + total + "%");

    });


});