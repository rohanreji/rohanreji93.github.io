var aText = new Array(
    "Hello! I am Rohan. I build android apps, web pages and device drivers."
    );
    var iSpeed = 100;
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
     
    function typewriter()
    {
     sContents =  '';
     var destination = document.getElementById("welcome-text");
     
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos-1);
      
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
   // typewriter();