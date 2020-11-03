//Permite el funcionamiento adecuado de la clase tab
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

//Permite obtener el valor de los datos de la caja de texto por medio de su id y tiene un control de excepciones
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

 //Creamos un arreglo llamado producto con los valores de cada caja de texto ingresada
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

//Permite generar una carta con la informacion de un producto ingresada en las cajas
function traerDatos(){
  a=obtenerDatos();
  productos.push(a);

  m="";

  for (var i = 0; i<productos.length; i++){
    m+='<div class="card">\
        <div class="content">\
          <img class="ui avatar image" src="img/desconocido.jpeg">'+productos[i].usuario+'\
        </div>\
            <div class="image">\
              <img src="img/desconocido.jpeg" >\
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
