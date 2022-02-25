<?php 
$nombre = $_POST [ 'nombre'];
$costo = $_POST [ 'costo'];
$precio = $_POST [ 'precio'];
$stock = $_POST [ 'stock'];
$stock_min = $_POST [ 'stock_min'];
?>
<div class="container" ><br>
<table class="table table-striped table-hover table-bordered">
    <tbody>
        <tr>
          <th>Nombre</th>
            <th>Costo</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Stock Min</th>
        </tr>
        <tr>
            <td>¿<?php echo $nombre ?></td>
            <td>¿<?php echo $costo ?></td>
            <td>¿<?php echo $precio ?></td>
            <td>¿<?php echo $stock ?></td>
            <td>¿<?php echo $stock_min ?></td>
        </tr>
    </tbody>
</table>
</div>