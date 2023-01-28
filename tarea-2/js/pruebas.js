function probarCalcularSalarioMasAlto() {
    console.assert(calcularSalarioMasAlto([2500000, 2750000, 3000000, 1800000]) === 3000000,
    'calcularSalarioMasAlto() no calcula correctamente el salario más alto de entre los salarios brindados'
    );
}

function probarCalcularSalarioMasBajo() {
    console.assert(calcularSalarioMasBajo([2500000, 2750000, 3000000, 1800000]) === 1800000,
    'calcularSalarioMasBajo() no calcula correctamente el salario más bajo de entre los salarios brindados'
    );
}

function probarCalcularSalarioPromedio() {
    console.assert(calcularSalarioPromedio([2500000, 2750000, 3000000, 1800000]) === 2512500,
    'calcularSalarioPromedio() no calcula correctamente el salario promedio de entre los salarios brindados'
    );
}

function probarConvertirSalariosAnualesAMensuales() {
    console.assert(JSON.stringify(convertirSalariosAnualesAMensuales([1200000, 2400000])) === JSON.stringify([100000, 200000]),
    'convertirSalariosAnualesAMensuales() no calcula correctamente los salarios mensuales de entre los salarios anuales brindados'
    );
}

function probarValidarCantidadIntegrantes() {
    console.assert(validarCantidadIntegrantes('5.') === 'Solo puedes agregar la cantidad de integrantes sin punto decimal',
        'validarIntegrantes no valida que el usuario haya agregado un número sin punto decimal'
        );
    console.assert(validarCantidadIntegrantes('0') === 'La cantidad de integrantes no puede ser menor a 0',
        'validarIntegrantes no valida que el usuario haya ingresado un número igual a 0'
        );
    console.assert(validarCantidadIntegrantes('-32') === 'La cantidad de integrantes no puede ser menor a 0',
        'validarIntegrantes no valida que el usuario haya ingresado un número menor a 0'
        );
    console.assert(validarCantidadIntegrantes('20') === 'Solo puede haber menos de 20 integrantes',
        'validarIntegrantes no valida que el usuario haya ingresado un número igual a 20'
        );
    console.assert(validarCantidadIntegrantes('35') === 'Solo puede haber menos de 20 integrantes',
        'validarIntegrantes no valida que el usuario haya ingresado un número mayor a 20'
        );
    console.assert(validarCantidadIntegrantes('5') === '',
        'validarIntegrantes no valida que el usuario haya ingresado un número válido'
        );
}

probarCalcularSalarioMasAlto();
probarCalcularSalarioMasBajo();
probarCalcularSalarioPromedio();
probarConvertirSalariosAnualesAMensuales();
probarValidarCantidadIntegrantes()
