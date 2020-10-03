const bannerdiv = document.querySelector(".banner-div");

const switchlang = `<div class="container langbtn">
<div class="d-flex justify-content-center">
<h5>Bahasa</h5>
<label class="switch">
<input type="checkbox" id="yes">
<span class="slider round"></span>
</label><h5>English</h5></div></div>`
bannerdiv.insertAdjacentHTML('beforebegin',switchlang);
const checkbox = document.querySelector('input[type="checkbox"]');

cookiearray = document.cookie.split(';');
for(var i=0; i<cookiearray.length; i++) {
    value = cookiearray[i].split('=')[1];
 }
 
if (value == "check" || value == "uncheck" ){
    if (window.location.pathname=="/src/about/" || window.location.pathname=='/src/komitmen/' || window.location.pathname=='/src/kontak/'){
        // page about
        if(value=="uncheck"){  
            checkbox.removeAttribute("checked")
            checkbox.checked=false  
            $('[data-localize]').localize("../../js/mylanguage",{language:"id"});
        
        }else if (value=="check"){   
            let setCheck = document.createAttribute("checked") ; 
            checkbox.setAttributeNode(setCheck)   
            checkbox.checked=true      
            $('[data-localize]').localize("../../js/mylanguage",{language:"en"});     
        }
    }
    else if (window.location.pathname=='/src/layanan/webinar/' || window.location.pathname=='/src/layanan/pelatihan/'){
        
        //page webinar
        if(value=="uncheck"){  
            checkbox.removeAttribute("checked")
            checkbox.checked=false  
            $('[data-localize]').localize("../../../js/mylanguage",{language:"id"});
        
        }else if (value=="check"){   
            let setCheck = document.createAttribute("checked") ; 
            checkbox.setAttributeNode(setCheck)   
            checkbox.checked=true      
            $('[data-localize]').localize("../../../js/mylanguage",{language:"en"});   
        }
    }
} else {
    if (navigator.language != "id"){
        checkbox.checked = true;
        if (window.location.pathname=="/src/about/" || window.location.pathname=='/src/komitmen/' || window.location.pathname=='/src/kontak/'){
            $('[data-localize]').localize("../../js/mylanguage",{language:"en"});
            
        }
        else if (window.location.pathname=='/src/layanan/webinar/' || window.location.pathname=='/src/layanan/pelatihan/'){            
            //page webinar            
            $('[data-localize]').localize("../../../js/mylanguage",{language:"en"});
            
        }

    
    }else{
        checkbox.checked = false;
        if (window.location.pathname=="/src/about/" || window.location.pathname=='/src/komitmen/' || window.location.pathname=='/src/kontak/'){
            $('[data-localize]').localize("../../js/mylanguage",{language:"id"});
            
        }
        else if (window.location.pathname=='/src/layanan/webinar/' || window.location.pathname=='/src/layanan/pelatihan/'){            
            //page webinar            
            $('[data-localize]').localize("../../../js/mylanguage",{language:"id"});
            
        }
    }

}

function nama(){
    document.addEventListener('DOMContentLoaded', function () {
        
        checkbox.addEventListener('change', function () {  
          if (checkbox.checked) {
            document.cookie = "name=" + "check" + "; path=/";
            location.reload();
          } else if (!checkbox.checked) {
            // do that
            document.cookie = "name=" + "uncheck"  + "; path=/";
            location.reload();
          }
        });
      });
}
nama() ;





