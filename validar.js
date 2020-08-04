var formulario = document.getElementById('formulario');

formulario.addEventListener('submit',function(e)){
	e.preventDefault();
	console.log('Validando contraseña')

	var datos = new FormData(formulario);



switch (console.log(datos.get('password'))) {
  case 'a1':
    window.location="http://www.google.com";
    break;
  case 'Manzanas':
    console.log('El kilogramo de manzanas cuesta $0.32.');
    break;
  case 'Platanos':
    console.log('El kilogramo de platanos cuesta $0.48.');
    break;
  case 'Cerezas':
    console.log('El kilogramo de cerezas cuesta $3.00.');
    break;
  case 'Mangos':
  case 'Papayas':
    console.log('El kilogramo de mangos y papayas cuesta $2.79.');
    break;
  default:
    console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
}

console.log("¿Hay algo más que te quisiera consultar?");

	//var mensajesError[];
	//	if (pass.value === null || pass.value === '') {
	//		mensajesError.push('Ingresa tu contraseña');
	//	}
	//	error.innerHTML = mensajesError.join(', ');
//
	//	return false;

}
