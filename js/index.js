

 window.onload=function(){
    var obt=document.getElementById("asiden");
    var odiv=document.getElementById("ul1");
    obt.onclick=function(){
      if(odiv.style.display == "none"){
        odiv.style.display = "block";
      }
      else{
        odiv.style.display = "none";
      }
    }
  } 