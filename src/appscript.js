// URL de la aplicación web de Apps Script
const appScriptUrl = 'https://script.google.com/macros/s/AKfycbzXQoQsIjLzcfSIuPvqk3ICfvhOZWVCoRo0SWDcgtg_KNemoP1TWZfkYJsODvIc7_VCWg/exec';

// Función para buscar datos
function buscarDatos() {
  const pedido = $pedido.value;
  const cedula1 = $cedula1.value;
  
  return fetch(`${appScriptUrl}?pedido=${pedido}&cedula1=${cedula1}`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.error('Error al buscar datos:', error));
}

// Función para actualizar datos
function actualizarDatos() {
  const pedido = $pedido.value;
  const cedula1 = $cedula1.value;
  const nuevosDatos = [
    $pedido.value,
    $fecha.value,
    $cuenta.value,
    $nombre1.value,
    $apellido.value,
    $direccion.value,
    $telefono.value,
    $barrio.value,
    $empresa.value,
    $telefono2.value,
    $direccion2.value,
    $cargo.value,
    $antiguo.value,
    $sueldo.value,
    $email.value,
    $fCobro.value,
    $nNino.value,
    $ciudad.value,
    $cNomb.value,
    $cApell.value,
    $cEmpresa.value,
    $ctele.value,
    $cDir.value,
    $cCargo.value,
    $cAntig.value,
    $cSueldo.value,
    $rNomb1.value,
    $rp1.value,
    $rTele1.value,
    $rTeleres1.value,
    $rNomb2.value,
    $rp2.value,
    $rTele2.value,
    $rTeleres2.value,
    $rNomb3.value,
    $rp3.value,
    $rTele3.value,
    $rTeleres3.value,
    $rNomb4.value,
    $rp4.value,
    $rTele4.value,
    $rTeleres4.value,
    $oCuotas.value,
    $oValor.value,
    $cedula1.value,
    $cc1.value,
    $ce1.value,
    $relacionista.value,
    $colaborador.value,
    $director.value,
    $organizador.value,
    $cedula2.value,
    $cc2.value,
    $ce2.value,
    $cedula3.value,
    $cedula4.value,
    $detColec.value,
    $detValor.value,
    $totalVal.value,
    $nCoutas.value,
    $vrCuota.value,
    $observ.value
  ];
  
  return fetch(appScriptUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ pedido, cedula1, nuevosDatos })
  })
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.error('Error al actualizar datos:', error));
}

// Función para crear un registro nuevo
function crearRegistroNuevo() {
  const pedido = $pedido.value;
  const cedula1 = $cedula1.value;
  const nuevosDatos = [
    $pedido.value,
    $fecha.value,
    $cuenta.value,
    $nombre1.value,
    $apellido.value,
    $direccion.value,
    $telefono.value,
    $barrio.value,
    $empresa.value,
    $telefono2.value,
    $direccion2.value,
    $cargo.value,
    $antiguo.value,
    $sueldo.value,
    $email.value,
    $fCobro.value,
    $nNino.value,
    $ciudad.value,
    $cNomb.value,
    $cApell.value,
    $cEmpresa.value,
    $ctele.value,
    $cDir.value,
    $cCargo.value,
    $cAntig.value,
    $cSueldo.value,
    $rNomb1.value,
    $rp1.value,
    $rTele1.value,
    $rTeleres1.value,
    $rNomb2.value,
    $rp2.value,
    $rTele2.value,
    $rTeleres2.value,
    $rNomb3.value,
    $rp3.value,
    $rTele3.value,
    $rTeleres3.value,
    $rNomb4.value,
    $rp4.value,
    $rTele4.value,
    $rTeleres4.value,
    $oCuotas.value,
    $oValor.value,
    $cedula1.value,
    $cc1.value,
    $ce1.value,
    $relacionista.value,
    $colaborador.value,
    $director.value,
    $organizador.value,
    $cedula2.value,
    $cc2.value,
    $ce2.value,
    $cedula3.value,
    $cedula4.value,
    $detColec.value,
    $detValor.value,
    $totalVal.value,
    $nCoutas.value,
    $vrCuota.value,
    $observ.value
  ];
  
  return fetch(appScriptUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ pedido, cedula1, nuevosDatos })
  })
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.error('Error al crear un registro nuevo:', error));
}
