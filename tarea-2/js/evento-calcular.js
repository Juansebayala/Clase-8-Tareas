const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(event) {
	const $salariosFamilia = document.querySelectorAll('div input');
	const salariosFamilia = conseguirValoresSalarios($salariosFamilia);
	const salariosFamiliaMensual = convertirSalariosAnualesAMensuales(salariosFamilia);
	agregarMensajesSalarios(salariosFamilia, salariosFamiliaMensual);
    event.preventDefault();
}

function conseguirValoresSalarios(salarios) {
	const valoresSalarios = [];
	for (let i = 0; i < salarios.length; i++) {
		if (salarios[i].value === '') {
			continue;
		} else {
			valoresSalarios.push(Number(salarios[i].value));
		}
	}
	return valoresSalarios;
}

function mostrarMensajesSalarios() {
	const $salarios = document.querySelector('#salarios-mensajes');
	$salarios.className = '';
}

function ocultarMensajesSalarios() {
	const $salarios = document.querySelector('#salarios-mensajes');
	$salarios.className = 'oculto';
}


function agregarMensajesSalarios(salariosAnuales, salariosMensuales) {
    $salarioMasAltoMensaje = document.querySelector('#salario-mas-alto');
	$salarioMasBajoMensaje = document.querySelector('#salario-mas-bajo');
	$salarioAnualPromedioMensaje = document.querySelector('#salario-anual-promedio');
	$salarioMensualPromedioMensaje = document.querySelector('#salario-mensual-promedio');
	$salarioMasAltoMensaje.textContent = `El salario más alto es: $${calcularSalarioMasAlto(salariosAnuales)}`;
	$salarioMasBajoMensaje.textContent = `El salario más bajo es: $${calcularSalarioMasBajo(salariosAnuales)}`;
	$salarioAnualPromedioMensaje.textContent = `El salario anual promedio es: $${calcularSalarioPromedio(salariosAnuales).toFixed(2)}`;
	$salarioMensualPromedioMensaje.textContent = `El salario mensual promedio es: $${calcularSalarioPromedio(salariosMensuales).toFixed(2)}`;
	mostrarMensajesSalarios();
}
