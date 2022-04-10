let $button = document.querySelector('button')
let $nodal = document.querySelector('.modal-container')
let $close = document.querySelector('.btn-close')
$button.onclick = () => $nodal.classList.remove('d-none')
$close.onclick = () => $nodal.classList.add('d-none')



/*window.onload = () => alert('Ejecutando')*/

//se carga js antes que el html