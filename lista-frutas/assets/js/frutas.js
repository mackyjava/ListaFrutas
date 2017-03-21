function agregar(){
  var fruta= document.getElementById("frutaNueva").value;
  var li =document.createElement("li");

  li.innerHTML = fruta;
  document.getElementById("listas").appendChild(li);
}
