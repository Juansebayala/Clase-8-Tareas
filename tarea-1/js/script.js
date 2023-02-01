const $agregarIntegrantes = document.querySelector('#agregar-integrantes');

$agregarIntegrantes.onclick = function(event) {
	eliminarIntegrantesCreados(integrantes);
	const cantidadIntegrantes = document.querySelector('#integrantes').value;
	const errorIngresoIntegrantes = comprobarIngresoDeIntegrantes(cantidadIntegrantes);
	if (!errorIngresoIntegrantes) {
		ocultarErrorIngresoIntegrantes();
		ocultarMensajesResultados();
		agregarIntegrantes();
		mostrarBotones();
	} else {
		mostrarErrorIngresoIntegrantes(errorIngresoIntegrantes);
		ocultarMensajesResultados();
		ocultarBotones();
	}
	event.preventDefault();
}

function eliminarIntegrantesCreados() {
	const $integrantes = document.querySelectorAll('#integrantes-familia div');
	$integrantes.forEach(function(integrante){
		integrante.remove();
	});
}

function comprobarIngresoDeIntegrantes(cantidadIntegrantes) {
	if (cantidadIntegrantes === '' || cantidadIntegrantes <= 0) {
		return 'Debes agregar al menos 1 integrante';
	} else if (/\./.test(cantidadIntegrantes)) {
		return 'No puedes agregar integrantes con punto decimal';
	} else {
		return '';
	}
}

function crearIntegrante() {
	const $integrante = document.createElement('div');
	const nuevoLabel = document.createElement('label');
	const textoLabel = document.createTextNode('Por favor, inserta la edad del familiar: ');
	const nuevoInput = document.createElement('input');
	const atributoInput = document.createAttribute('type');
	atributoInput.value = 'number';
	nuevoLabel.appendChild(textoLabel);
	nuevoInput.setAttributeNode(atributoInput);
	$integrante.appendChild(nuevoLabel);
	$integrante.appendChild(nuevoInput);
	return $integrante;
}

function agregarIntegrantes() {
	const $nodoIntegrantes = document.querySelector('#integrantes-familia');
	cantidadIntegrantesFamilia = document.querySelector('#integrantes').value;
	if (cantidadIntegrantesFamilia > 0) {	
		for (let i = 1; i <= cantidadIntegrantesFamilia; i++) {
			const nuevoIntegrante = crearIntegrante();
			agregarIntegrante($nodoIntegrantes, nuevoIntegrante);
		}
	} else {
		return false;
	}
}

function agregarIntegrante(nodoIntegrantes, integrante) {
	nodoIntegrantes.appendChild(integrante);
}

function mostrarErrorIngresoIntegrantes(mensajeError) {
	const $mensaje = document.querySelector('#alerta-ingreso-integrantes');
	$mensaje.textContent = mensajeError;
	$mensaje.className = '';
}

function ocultarErrorIngresoIntegrantes() {
	const $mensaje = document.querySelector('#alerta-ingreso-integrantes');
	$mensaje.className = 'oculto';
}

function mostrarBotones() {
	document.querySelector('#boton-calcular').className = '';
	document.querySelector('#boton-resetear').className = '';
}

function ocultarBotones(botonCalcular, botonResetear) {
	document.querySelector('#boton-calcular').className = 'oculto';
	document.querySelector('#boton-resetear').className = 'oculto';
}
