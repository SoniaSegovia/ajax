//GUARDAMOS LA INSCRIPCION
$("#enviar").off("click");
$("#enviar").on("click", function(e) {
    $('enviar').attr("disabled", true);
    var nombre = $("#nombre").val();
    var costo = $("#costo").val();
    var precio = $("#precio").val();
    var stock = $("#stock").val();
    var stock_min = $("#stock_min").val();
   
    parametros = {
        'nombre': nombre,
        'costo': costo,
        'precio': precio,
        'precio': precio,
        'stock': stock,
        'stock_min': stock_min
    };
    $.ajax({
        type: "POST",
        url: "RecibeProductoAjax.php",
        data: parametros,
        beforeSend: function(objeto) {
            $("#Msg").html('Cargando...');
        },
        success: function(datos) {
            $("#Msg").html(datos);
            $('#enviar').attr("disabled", false);
            $('#nombre').val(''),
            $('#costo').val(''),
            $('#precio').val(''),
            $('stcok').val(''),
            $('#stock_min').val('')
        }
    });
    event.preventDefault();
});
