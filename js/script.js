function abrirCategoria(evt, categoria) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(categoria).style.display = "block";
  evt.currentTarget.className += " active";
  
}

document.getElementById("defaultOpen").click();

function productos(){
  var usuario = $('#caja1').val();
  if(usuario === ''){
    alert("Un campo esta vacio");
    return false;
  }else{
 
  }
  var id = $('#caja2').val();
   if(id === ''){
    alert("Un campo esta vacio");
    return false;
  }else{
 
  }
  var descripcion = $('#caja3').val();
   if(descripcion === ''){
    alert("Un campo esta vacio");
    return false;
  }else{
 
  }
  var especificacion = $('#caja4').val();
   if(especificacion === ''){
    alert("Un campo esta vacio");
    return false;
  }else{
 
  }
  var precio = $('#caja5').val();
   if(precio === ''){
    alert("Un campo esta vacio");
    return false;
  }else{
 
  }
  var cantidad = $('#caja6').val();
   if(cantidad === ''){
    alert("Un campo esta vacio");
    return false;
  }else{
    alert("Todo correcto, el Ete Sech lo aprueba");
  } 
  var producto={
    usuario: usuario,
    id: id,
    descripcion: description,
    especificacion: especificacion,
    precio: precio,
    cantidad: cantidad,
  };
  return producto;
}

$("#botonprueba").click(function(){ 
  productos();
});

