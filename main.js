import './style.css'
import 'bootstrap/dist/css/bootstrap.css' 

document.addEventListener('DOMContentLoaded',tolt)

function tolt()
{
  //document.getElementById('gombID').addEventListener('click',katt);
  document.getElementById('gombID').addEventListener('click',kepSzelesseg);
  document.getElementById('gombID').addEventListener('click',kepKeretVastagsag);
  document.getElementById('gombID').addEventListener('click',urlBealittas);
}

function urlBealittas()
{
  let url = document.getElementById('urlID').value;
  console.log(url);
  document.getElementById('kepID').src = url;
}
function kepSzelesseg()
{
  let a = document.getElementById('szelessegID').value;
  document.getElementById('kepID').style.width= a+"px";
  document.getElementById('kepID').style.height= a+"px";


  
}
function kepKeretVastagsag()
{
  let vastagsag = document.getElementById('vastagsagID').value;
  let szin = document.getElementById('szinID').value;
  let string = `${vastagsag}px solid ${szin}`;
  document.getElementById("kepID").style.border = string;
  console.log(string);
}
