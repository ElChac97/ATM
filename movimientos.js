function depositar() {
    let depositoInput = document.getElementById("deposito");
    let cantidad = parseFloat(depositoInput.value);
  
    if (isNaN(cantidad) || cantidad === 0)  {
      alert("Por favor, ingresa una cantidad válida.");
      return;
    }
    // Obtener el elemento saldo-usuario
    let saldoUsuario = document.getElementById("saldo-usuario");
  
    // Obtener el valor actual del saldo como string
    let saldoActualString = saldoUsuario.innerText;
  
    // Eliminar el símbolo "$" y otros caracteres no numéricos
    let saldoActual = parseFloat(saldoActualString.replace(/[^0-9.-]+/g, ""));
  
    // Sumar la cantidad del depósito al saldo actual
    let nuevoSaldo = saldoActual + cantidad;
  
    // Verificar si el nuevo saldo excede los límites
    if (nuevoSaldo > 990) {
      alert("Tu cuenta nivel 3 no puede pasar los 990 dolares, comunícate con atención al cliente para subir de nivel tu cuenta.");
      return;
    }
  
    // Actualizar el elemento saldo-usuario con el nuevo saldo
    saldoUsuario.innerText = "$" + nuevoSaldo.toFixed(2);
  
    actualizarMovimientos(cantidad, nuevoSaldo, "Deposito");
  }
  

  function retirar() {
    let retiroInput = document.getElementById("retiro");
    let cantidad = parseFloat(retiroInput.value);
    
    if (isNaN(cantidad) || cantidad === 0)  {
      alert("Por favor, ingresa una cantidad válida.");
      return;
    }
  
    let saldoUsuario = document.getElementById("saldo-usuario");
    let saldoActualString = saldoUsuario.innerText;
    let saldoActual = parseFloat(saldoActualString.replace(/[^0-9.-]+/g, ""));
    let nuevoSaldo = saldoActual - cantidad;
    let nuevoSaldoNum = parseFloat(nuevoSaldo.toFixed(2));

    if (nuevoSaldoNum < 10) {
        alert("El saldo mínimo permitido es de $10.");
        return;
    }
    
    saldoUsuario.innerText = "$" + nuevoSaldo.toFixed(2);

  
    actualizarMovimientos(cantidad, nuevoSaldo, "Retiro");

  }
      
  
  let contadorTransacciones = 0;

  function actualizarMovimientos(cantidad, nuevoSaldo, tipoMovimiento) {
    let movimientosTableBody = document.getElementById("movimientos-table-body");
    contadorTransacciones++;
  
    let transaccion = contadorTransacciones.toString();
  
    // Crear una nueva fila de movimiento
    let nuevaFilaMovimiento = document.createElement("tr");
    nuevaFilaMovimiento.innerHTML = `<td>${transaccion}</td><td>${tipoMovimiento}</td><td>$${cantidad}</td>`;
  
    // Agregar la nueva fila al tbody de la tabla de movimientos
    movimientosTableBody.appendChild(nuevaFilaMovimiento);
  }
  
  
  
  
  



