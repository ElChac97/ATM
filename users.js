const usuarios =  [ {
  
  nombre: 'Amalia Peréz Torres',
  usuario: 'mali@gmail.com',
  tarjeta: '5579 0700 1500 0001',
  contraseña: 'mali',
  saldo: '$200'
},
  
  {
  nombre: 'Gerardo Chacón Álvarez',
  usuario: 'gerardo@gmail.com',
  tarjeta: '5579 0700 1500 0002',
  contraseña: 'gera',
  saldo: '$290'
},
  {
    nombre: 'Maui López Ochoa',
    usuario: 'maui@gmail.com',
    tarjeta: '5579 0700 1500 0003',
    contraseña: 'maui',
    saldo: '$67'
  }
] 

function iniciarSesion() {
  const user = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;
  let valid = false;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].usuario === user && usuarios[i].contraseña === password) {
      valid = true;
      window.location.href = `movimientos.html?nombre=${usuarios[i].nombre}&tarjeta=${usuarios[i].tarjeta}&saldo=${usuarios[i].saldo}`;
      break; // Salir del bucle cuando se encuentra una coincidencia
    }
  }

  if (!valid) {
    alert('Usuario o contraseña incorrectas');
  }
}



// Obtener los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const nombreUsuario = urlParams.get('nombre');
const tarjetaUsuario = urlParams.get('tarjeta');
const saldoUsuario = urlParams.get('saldo');

// Mostrar el nombre y número de tarjeta del usuario en el HTML
const nombreElement = document.getElementById('nombre-usuario');
const tarjetaElement = document.getElementById('tarjeta-usuario');
const saldoElement = document.getElementById('saldo-usuario');

nombreElement.textContent = nombreUsuario;
tarjetaElement.textContent = tarjetaUsuario;
saldoElement.textContent = saldoUsuario;








