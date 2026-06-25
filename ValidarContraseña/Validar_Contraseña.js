function validarPasswordManual() {
  const password = document.getElementById('password2').value;

  const tieneLongitud = password.length >= 8;

  let tieneMayuscula = false;
  for (let letra of password) {
    if (letra === letra.toUpperCase() && letra !== letra.toLowerCase()) {
      tieneMayuscula = true;
      break;
    }
  }

  let tieneNumero = false;
  for (let caracter of password) {
    if (caracter >= '0' && caracter <= '9') {
      tieneNumero = true;
      break;
    }
  }

  if (tieneLongitud && tieneMayuscula && tieneNumero) {
    document.getElementById('resultado2').textContent = "Contraseña válida ✓";
  } else {
    document.getElementById('resultado2').textContent = "Contraseña inválida. Revisa los requisitos.";
  }
}