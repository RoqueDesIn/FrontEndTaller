$(document).ready(function () {
	//Seg�n se cargue el HTML, consume un servicio GET para obtener
	//Todos los usuarios y los rellena en la tabla vac�a results.
	$.ajax({
		url: 'https://localhost:44346/Resum',
		dataType: 'json',
		type: 'get',
		contentType: 'application/json',
		success: function (data, status) {
			//Por cada elemento dentro del array data, construye una fila (tr)
			//y a�ade celdas con los campos de cada elemento del array.
			$.each(data, function (i, item) {
				var $tr = $('<tr>').append(
					$('<td>').text(item.cant),
					$('<td>').text(item.total),
				); //.appendTo('#records_table');
				console.log($tr.wrap('<p>').html());
				$('#Total').append($tr);
			});

		}
	});
	$.ajax({
		url: 'https://localhost:44346/Resum/UserResum',
		dataType: 'json',
		type: 'get',
		contentType: 'application/json',
		success: function (data, status) {
			//Por cada elemento dentro del array data, construye una fila (tr)
			//y a�ade celdas con los campos de cada elemento del array.
			$.each(data, function (i, item) {
				var $tr = $('<tr>').append(
					$('<td>').text(item.nombre),
					$('<td>').text(item.cantidad),
					$('<td>').text(item.valor),
				); //.appendTo('#records_table');
				console.log($tr.wrap('<p>').html());
				$('#User').append($tr);
			});

		}
	});
	// botón Logout
	$("#logout").click(function () {
		window.location.replace("../views/login.html");
	});
});

