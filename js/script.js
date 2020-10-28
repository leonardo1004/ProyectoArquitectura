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

function ObtenerDatos(){
  var producto{
    usuario: $("#caja1").val(),
    id: $("#caja2").val(),
    descripcion: $("#caja3").val(),
    especificaciones: $("#caja4").val(),
    precio: $("#caja5").val(),
    cantidad: $("#caja6").val(),
  };
  return producto;
}

$("#crearP").click(function(){ 
  traerDatos();
  vaciarDatos();
});

var productos=[];

function traerDatos(){

  a=obtenerDatos();
  productos.push(a);

  m="";

  for (var i = 0; i<productos.length; i++){

    m+='<div class="card">\
            <div class="image">\
              <img src="img/desconocido.jpg" >\
            </div>\
              <div class="content">\
                  <a class="header">'+productos[i].usuario+'</a>\
                  <div class="meta">\
                    <p>Fecha de creacion: <span class="date"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'+personas[i].id+'</font></font></span></p>\
                  </div>\
                  <div class="meta">\
                    <p>ID: <span class="identidad">'+productos[i].descripcion+' </span></p>\
                  </div>\
                  <div class="meta">\
                    <p>RH: <span class="sangre">'+productos[i].especificaciones+'</span></p>\
                  </div>\
                  <div class="meta">\
                    <p>Edad: <span class="edad">'+productos[i].precio+' </span></p> \
                  </div>\
                  <div class="meta">\
                    <p>Ciudad: <span class="ciudad">'+productos[i].cantidad+'</span></p>\
                  </div>\
              </div>\
          </div>'
  }
    $("#cd").empty();
    $("#cd").append(m);
}