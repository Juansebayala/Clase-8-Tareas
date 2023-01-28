function calcularSalarioMasAlto(salarios) {
	let salarioMasAlto = salarios[0];
	for (let i = 0; i < salarios.length; i++) {
		if (salarioMasAlto < salarios[i]) {
			salarioMasAlto = salarios[i];
		}
	}
	return salarioMasAlto;
}

function calcularSalarioMasBajo(salarios) {
	let salarioMasAlto = salarios[0];
	for (let i = 0; i < salarios.length; i++) {
		if (salarioMasAlto > salarios[i]) {
			salarioMasAlto = salarios[i];
		}
	}
	return salarioMasAlto;
}

function calcularSalarioPromedio(salarios) {
	let sumaSalarios = 0;
	for (let i = 0; i < salarios.length; i++) {
		sumaSalarios += salarios[i];
	}
	return sumaSalarios / salarios.length;
}

function convertirSalariosAnualesAMensuales(salarios) {
	const salariosMensuales = [];
	const MESES_EN_UN_ANIO = 12;
	for (let i = 0; i < salarios.length; i++) {
		salariosMensuales.push(salarios[i] / MESES_EN_UN_ANIO);
	}
	return salariosMensuales;
}
