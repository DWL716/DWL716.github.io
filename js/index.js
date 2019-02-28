

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
   console.log(22)
      var tops = document.getElementById("top");
      onscroll = function(){
          var topScrollbar = document.documentElement.scrollTop;
          var safair = window.pageYOffset;
          console.log(safair)
          if(topScrollbar > 30 || safair > 30) {
            tops.style.bottom = "15%"
          }else{
            tops.style.bottom = "-5%"
          }
      }
    

  ck();
  })()
  