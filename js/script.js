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

var pacientes=[];

var symptoms = [];
var symptomsMarked = [];

arr="";

var selected1;
var selected2;
var selected3;
var selected4;
var selected5;
function ShowSelected1(){
var combo = document.getElementById("Pais");
selected1 = combo.options[combo.selectedIndex].text;
}
function ShowSelected2(){
var combo = document.getElementById("Ciudad");
selected2 = combo.options[combo.selectedIndex].text;
}
function ShowSelected3(){
var combo = document.getElementById("Localidad");
selected3 = combo.options[combo.selectedIndex].text;
}
function ShowSelected4(){
var combo = document.getElementById("Genero");
selected4 = combo.options[combo.selectedIndex].text;
}
function ShowSelected5(){
var combo = document.getElementById("Doc");
selected5 = combo.options[combo.selectedIndex].text;
}

$("#boton1").click(function(){ 
  imprimir();
  limpiaropciones();
  Graficar();
  Graficar1();
  Graficar2();
});

function datos(){
  
  addSymptomsToPatient();
  
  var paciente ={
    nombres:  $("#op1").val(),
    apellidos:  $("#op2").val(),
    fecha:  $("#op3").val(),
    documento:  $("#op4").val(),
    direccion: $("#opcion1").val(),
     edad: $("#op5").val(),
    pais: selected1,
    ciudad: selected2,
    localidad: selected3,
    genero: selected4,
    Tdocumento: selected5,
    informacion: $("#opcion2").val(),
  sintomas: symptomsMarked
  }
return paciente;
}
 var Sintomas = {fiebre:0, tension:0, malestar:0, otros:0};
 var S1 = {fiebre:0, tension:0, malestar:0, otros:0};
function imprimir(){

Sintomas = {fiebre:0, tension:0, malestar:0, otros:0};
  inf=datos();
  pacientes=pacientes.concat([inf]);

console.log("imprimir");
 
  for (var i = 0; i<pacientes.length; i++){
  if (pacientes[i].genero==null){
     pacientes[i].genero="Otro"
   }
   var arregloSintomas = [];

   for(var j = 0; j < pacientes[i].sintomas.length; j++){
     arregloSintomas[j] = pacientes[i].sintomas[j].name + "(" + pacientes[i].sintomas[j].value + ")";

       //________________________
    if(pacientes[pacientes.length-1].sintomas[j]!=null){
      if (pacientes[pacientes.length-1].sintomas[j].name=="Fiebre" ){
        Sintomas.fiebre=Sintomas.fiebre+1;
      }}
   if(pacientes[pacientes.length-1].sintomas[j]!=null){
     if (pacientes[pacientes.length-1].sintomas[j].name=="Malestar general" ){
        Sintomas.malestar=Sintomas.malestar+1;
      }}
      if(pacientes[pacientes.length-1].sintomas[j]!=null){
      if (pacientes[pacientes.length-1].sintomas[j].name=="Tensión"  ){
        Sintomas.tension=Sintomas.tension+1;
      }
}
  

    if(Sintomas.fiebre==0){

      Sintomas.fiebre==S1.fiebre;
      
    }else{

      S1.fiebre=Sintomas.fiebre;
    
    }

    if(Sintomas.tension==0){

      Sintomas.tension==S1.tension;
    
    }else{


    S1.tension=Sintomas.tension;

    }

    if(Sintomas.malestar==0){

      Sintomas.malestar==S1.malestar;

    }else{
  S1.malestar=Sintomas.malestar;

    }
    if(Sintomas.otros==0){

      Sintomas.otros==S1.otros;
  
    }else{
    S1.otros=Sintomas.otros;

    }

    
  

     //________________________
   



     //________________________
   

   }

 
    arr='<div class="card">\
            <div class="content">\
                  <img class="ui avatar image" src="img/'+pacientes[i].genero +'.png"> '+pacientes[i].nombres+' '+pacientes[i].apellidos+'\
            </div>\
            <div class="image">\
              <img class="gene" src="img/'+pacientes[i].genero +'.PNG" >\
            </div>\
              <div class="content">\
                  <a class="header"></a>\
                   <div class="meta">\
                  <p>Edad: <span class="edad">'+pacientes[i].edad+'</span></p>\
                  </div>\
                  <div class="meta">\
                  <p>Genero: <span class="genero">'+pacientes[i].genero+'</span></p>\
                  </div>\
                  <div class="meta">\
                  <p>F Nacimiento: <span class="nacimiento">'+pacientes[i].fecha+'</span></p>\
                  </div>\
                  <div class="meta">\
                    <p>'+pacientes[i].Tdocumento+': <span class="documento">'+pacientes[i].documento+'</span></p>\
                  </div>\
                  <div class="meta">\
                    <p>Pais: <span class="pais">'+pacientes[i].pais+'</span></p>\
                  </div>\
                  <div class="meta">\
                    <p>Ciudad: <span class="ciudad">'+pacientes[i].ciudad+'</span></p>\
                  </div>\
                  <div class="meta">\
                    <p>Localidad: <span class="localidad">'+pacientes[i].localidad+' </span></p> \
                  </div>\
                  <div class="meta">\
                    <p>Direccion: <span class="direccion">'+pacientes[i].direccion+'</span></p>\
                  </div>\
                  <div class="meta">\
                    <p>Informacion +: <span class="informacion">'+pacientes[i].informacion+'</span></p>\
          </div>\
          <div class="meta">\
                    <p>Sintomas: <span class="enfermedades">'+arregloSintomas.join(" , ")+'</span></p>\
          </div>\
              </div>\
          </div>'

          
  }
    
    $("#cd").append(arr);

    
}


function limpiaropciones(){
  $("#opcion1").val("");
  $("#opcion2").val("");
  $("#op1").val("");
  $("#op2").val("");
  $("#op3").val("");
  $("#op4").val("");
  $("#Ciudad").val('1')
  $("#Localidad").val('1')
  $("#Pais").val('1')
  $("#Genero").val('1')
  $("#Doc").val('1')
}


function Graficar(){
document.getElementById("Graficas Sintomas").innerHTML = '<div id="g"><canvas id="myChart"></canvas></div>'
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx,{
      type:"pie",
      data:{
          labels:["Fiebre","Malestar General","Tension","Otros"],// aqui va un arreglo que muestra lo que se esta graficando edad en este caso
          datasets:[{
              label:"num Datos",
              data:[S1.fiebre,S1.malestar,S1.tension,S1.otros],//VAlores a representar en la grafica
              backgroundColor:[
                  'rgb(66,134,244)',                    
                  'rgb(74,135,72)',
                  'rgb(6,132,74)', 
                  'rgb(146,264,84)'
              ]
          }]
      },
  });
}





$("#floatDiv2").hide();



initializeSymptoms(); console.log("-initializing Symptoms array");
addChecBoxesToDiv(); console.log("-Adding symptoms to center div");
createAnotherSymptomDiv(); console.log("-Creating floating div to add symptoms");

function superSectionSymptoms() {
  console.log("-superSectionSymptoms STARTING");
  $("#superSection").hide(); console.log("-super section *Síntomas* HIDING");
  $("#floatDiv2").show(200); console.log("-floating div SHOWING");
}

function createAnotherSymptomDiv() {
  var myDivToAdd = document.getElementById("floatDiv2");
  
  
  var floatDivAddSymptom = document.createElement("div");
  floatDivAddSymptom.id = "floatDivAddSymptom";
  
  myDivToAdd.appendChild(floatDivAddSymptom);
  
  $("#floatDivAddSymptom").hide(); console.log("-floating div to add symptoms HIDING");
  
  
  var elementInput = document.createElement("input");
  elementInput.id = "newSymptomName";
  
  var label = document.createElement("label");
  var checkBox = document.createElement("input");
  checkBox.type = "checkBox";
  checkBox.id = "checkBoxNewSymptomHaveAnotherValue";
  
  floatDivAddSymptom.appendChild(label);
  label.appendChild(document.createTextNode("Nombre del síntoma: "));
  floatDivAddSymptom.appendChild(elementInput);
  
  floatDivAddSymptom.appendChild(document.createElement('br'));
  var label = document.createElement("label");
  
  floatDivAddSymptom.appendChild(label);
  floatDivAddSymptom.appendChild(checkBox);
  label.appendChild(document.createTextNode("El síntoma tiene un valor adicional: "));
  
  floatDivAddSymptom.appendChild(document.createElement('br'));
  floatDivAddSymptom.appendChild(document.createElement('br'));
  
  var bttn = document.createElement("button");
  bttn.id = "addSymptom";
  bttn.innerHTML = "Agregar síntoma";
  bttn.onclick = addSymptom;
  
  var bttn2 = document.createElement("button");
  bttn2.id = "cancelAddSymptom";
  bttn2.innerHTML = "Cancelar";
  bttn2.onclick = comeBackToSymptomsDiv;
  
  floatDivAddSymptom.appendChild(bttn);
  floatDivAddSymptom.appendChild(bttn2);
  
}

function addSymptom () {
  var auxt = 0;
  if($("#checkBoxNewSymptomHaveAnotherValue").prop('checked') == true){
    auxt = 1;
  }
  
  var auxw = $("#newSymptomName").val();
  var symptomsAux = {
    name: auxw,
    value: auxt,
    marked: 0,
    id: symptoms.length
  };
  symptoms.push(symptomsAux);
  
  document.getElementById("floatDivSymptoms").innerHTML = "";
  addChecBoxesToDiv();
  
  comeBackToSymptomsDiv();
  
}

function addAnotherSymtompDiv() {
  
  $("#floatDivSymptoms").hide(100); console.log("-floating div HIDING");
  
  $("#floatDivAddSymptom").show(100); console.log("-floating div to add symptoms SHOWING");
  
}

function comeBackToSymptomsDiv() {
  $("#floatDivAddSymptom").hide();
  $("#floatDivSymptoms").show(100);
  
  $("#checkBoxNewSymptomHaveAnotherValue").prop('checked', false);
  $("#newSymptomName").val("");
}

function addChecBoxesToDiv() {
  
  var myDivToAddAux = document.getElementById("floatDiv2");
  
  myDivToAdd = document.getElementById("floatDivSymptoms");
  
  for (var i = 0; i < symptoms.length; i++) {
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    
    checkBox.type = "checkBox";
    checkBox.value = symptoms[i].name;
    checkBox.id = symptoms[i].id + "CheckboxInput";
    
    myDivToAdd.appendChild(checkBox);
    myDivToAdd.appendChild(label);
    if(symptoms[i].value == 0 ){
      label.appendChild(document.createTextNode(symptoms[i].name));
    } else {
      label.appendChild(document.createTextNode(symptoms[i].name + " | " + "Valor: "));
      var input = document.createElement("input");
      input.type = "text";
      input.id = symptoms[i].id + "ValueInput";
      myDivToAdd.appendChild(input);
    }
    myDivToAdd.appendChild(document.createElement('br'));
  }
  
  addAnotherSymtompButton(); console.log("-Adding *Otro síntoma* button");
}

function addAnotherSymtompButton() {
  
  myDivToAdd = document.getElementById("floatDivSymptoms");
  
  myDivToAdd.appendChild(document.createElement('br'));
  myDivToAdd.appendChild(document.createElement('br'));
  
  var bttn = document.createElement("button");
  bttn.id = "anotherSymptom";
  bttn.innerHTML = "Otro síntoma";
  bttn.onclick = addAnotherSymtompDiv;
  
  myDivToAdd.appendChild(bttn);
}



function initializeSymptoms() {
  symptomsAux = [{
    name: "Fiebre",
    value: 1,
    marked: 0,
    id: 0
  }, {
    name: "Malestar general",
    value: 0,
    marked: 0,
    id: 1
  }, {
    name: "Tensión",
    value: 1,
    marked: 0,
    id: 2
  }];
  
  if(symptoms.length == 0) {
    symptoms = symptomsAux;
  }
}

function addSymptoms (symptomObject) {
  symptoms.push(symptomObject);
}


function addSymptomsToPatient () {
  symptomsMarked = [];
  
  for (var i = 0; i < symptoms.length; i++) {
    if($("#"+symptoms[i].id+"ValueInput").length) {
      console.log("Entró");
      symptoms[i].value = $("#"+symptoms[i].id+"ValueInput").val();
    }
    if($("#"+symptoms[i].id+"CheckboxInput").prop('checked') == true) {
      symptomsMarked[symptomsMarked.length] = symptoms[i];
    }
  }
}

 
function cant(){
  var cantidades
  return cantidades;
}

DF = [];

function valorLabels(){
  DS = [];
  
  for(var i = 0;i< DF.length;i++){
    if(i==0){
      DS.push(DF[i]);
    }
    if(i!=0){
      conta = 0;
      for(var j = 0;j<i;j++){
        if((DF[i]==DF[j])){
          conta = conta + 1;
        }        
      }
      if(conta==0){
          DS.push(DF[i]);
      }
    }
  }
return DS;
}


function valorData(){
  DSAUX = valorLabels();
  cant= [];
  for(var j = 0;j<DSAUX.length;j++){  
    var cont = 0;
    for(var i = 0;i<DF.length;i++){
      if(DSAUX[j] == DF[i]){
        cont=cont+1;
      }
    }
    cant.push(cont);
  }
  return cant;
}

function valorColor(DSt){
  ls = [];
  for(var i = 0;i<DSt;i++){
    var a = Math.round(101*Math.random());
    var b = Math.round(101*Math.random());
    var c = Math.round(101*Math.random());
    var cam = 'rgb('+a+','+b+','+c+')';
    ls.push(cam);
    console.log(cam);
  }
  return ls;
}



function Graficar1(){
  document.getElementById("Graficas Edad").innerHTML = '<div id="g1"><canvas id="myChart1"></canvas></div>';
  aux1 = datos();
  DF.push(aux1['edad']);
  auxCant = valorData();
  auxLabels = valorLabels();
  auxColor = valorColor(auxLabels.length);
  var ctx = document.getElementById("myChart1").getContext("2d");
  var myChart = new Chart(ctx,{
      type:"doughnut",
      data:{
          labels:auxLabels,
          datasets:[{
              label:"Edad",
              data:auxCant,
              backgroundColor:auxColor
          }]
      },
  });
  
}

arg2 = [0,0,0];

function Graficar2(){
  document.getElementById("Graficas Localidad").innerHTML = '<div id="g2"><canvas id="myChart2"></canvas></div>';
  count = 0;
  auxx = datos();
  auxx2 = auxx['localidad'];
  if(auxx2 == 'Engativa'){
    count = arg2[0]+1;
    arg2[0] = count;
  }
  if(auxx2 == 'Bosa'){
    count = arg2[1]+1;
    arg2[1] = count;
  }
  if(auxx2 == 'Kenedy'){
    count = arg2[2]+1;
    arg2[2] = count;
  }    
  var ctx = document.getElementById("myChart2").getContext("2d");
  var myChart = new Chart(ctx,{
      type:'doughnut',
      data:{
          labels:['Engativa,','Bosa','Kenedy'],
          datasets:[{
              label:"Num datos",
              data:arg2,
              backgroundColor:[
                  'rgb(66,134,244)',                    
                  'rgb(74,135,72)',
                  'rgb(229,89,50)'
              ]
          }]
      },
  });
}