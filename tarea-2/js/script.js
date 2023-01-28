const $botonAgregarIntegrantes = document.querySelector('#agregar-integrantes');

$botonAgregarIntegrantes.onclick = function(event) {
	const $cantidadIntegrantes = (document.querySelector
	('#integrantes-familia').value);
	borrarIntegrantesAgregados();

	const errores = {
		errorCantidadIntegrantes: validarCantidadIntegrantes($cantidadIntegrantes)
	}

	if (errores.errorCantidadIntegrantes) {
		borrarErrores();
		crearErrores(errores);
		ocultarBotonCalcular();
		ocultarMensajesSalarios();
	} else {
		borrarErrores();
		agregarIntegrantes(Number($cantidadIntegrantes));
		mostrarBotonCalcular();
	}

	event.preventDefault();
}

function crearIntegrante() {
	const $integrante = document.createElement('div');
	const nuevoLabel = document.createElement('label');
	const textoLabel = 'Por favor, indica el salario anual del integrante: ';
	nuevoLabel.textContent = textoLabel;
	const nuevoInput = document.createElement('input');
	$integrante.appendChild(nuevoLabel);
	$integrante.appendChild(nuevoInput);
	return $integrante;
}

function agregarIntegrantes(cantidadIntegrantes) {
	const $salariosIntegrantes = document.querySelector('#salarios-integrantes');
	for (let i = 0; i < cantidadIntegrantes; i++) {
		const $integrante = crearIntegrante();
		$salariosIntegrantes.appendChild($integrante);
	}
}

function mostrarBotonCalcular() {
	const $botonCalcular = document.querySelector('#boton-calcular');
	$botonCalcular.className = '';
}

function ocultarBotonCalcular() {
	const $botonCalcular = document.querySelector('#boton-calcular');
	$botonCalcular.className = 'oculto';
}

function borrarIntegrantesAgregados() {
	$salariosIntegrantes = document.querySelector('#salarios-integrantes');
	$elementos = document.querySelectorAll('#salarios-integrantes div');
	$elementos.forEach(function(elemento){
		$salariosIntegrantes.removeChild(elemento);
	});
}

function validarCantidadIntegrantes(cantidadIntegrantes) {
	if (!/^[0-9-]+$/.test(cantidadIntegrantes) || /\./.test(cantidadIntegrantes)) {
		return 'Solo puedes agregar la cantidad de integrantes sin punto decimal';
	} else if (cantidadIntegrantes <= 0) {
		return 'La cantidad de integrantes no puede ser menor a 0';
	} else if (cantidadIntegrantes >= 20) {
		return 'Solo puede haber menos de 20 integrantes';
	} else {
		return '';
	}
}

function crearErrores(errores) {
	const $errores = document.querySelector('#mensajes-error');
	const $error = document.createElement('li');
	$error.textContent = errores.errorCantidadIntegrantes;
	$errores.appendChild($error);
}

function borrarErrores() {
	const $errores = document.querySelectorAll('#mensajes-error li');
	$errores.forEach(function(error){
		error.remove();
	});
}
