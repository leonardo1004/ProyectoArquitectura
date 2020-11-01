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

var productos=[];

function obtenerDatos(){
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
  obtenerDatos();
});

$("#botoncarta").click(function(){ 
  traerDatos();
});

function traerDatos(){
  a=obtenerDatos();
  productos.push(a);

  m="";

  for (var i = 0; i<productos.length; i++){
    m+='<div class="card">\
        <div class="content">\
          <img class="ui avatar image" src="img/Masculino.PNG">'+productos[i].usuario+'\
        </div>\
            <div class="image">\
              <img src="img/Masculino.PNG" >\
            </div>\
              <div class="content">\
                  <a class="header"><center>'+productos[i].descripcion+'</center> </a>\
                  <div class="meta">\
                    <p>ID: <span class="identidad">'+productos[i].id+'</span></p>\
                  </div>\
                  <div class="meta">\
                    <p>Cantidad: <span class="cantidad">'+productos[i].cantidad+'</span></p>\
                  </div>\
                  <div class="meta">\
                    <p>Precio: <span class="precio">'+productos[i].precio+'</span></p>\
                  </div>\
                    <p>Especificaciones: <span class="especificaciones">'+productos[i].especificacion+'</span></p>\
                  </div>\
              </div>\
          </div>'
  }
  $("#cd").empty();
  $("#cd").append(m);
}
