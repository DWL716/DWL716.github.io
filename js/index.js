

 (function(){
    var obt=document.getElementById("asiden");
    var odiv=document.getElementById("ul1");
  
    obt.onclick=ck;
    function ck(){
      if(odiv.style.display == "none"){
        odiv.style.display = "block";
        console.log(11)
      }
      else{
        odiv.style.display = "none";
      }
    }
   
      var tops = document.getElementById("top");
      window.onscroll = function(){
          var topScrollbar = document.documentElement.scrollTop;
          if(topScrollbar > 30) {
            tops.style.bottom = "15%"
          }else{
            tops.style.bottom = "-5%"
          }
      }
    

  ck();
  })()
  