
function splash(){
    const splash = document.querySelector('.splash');
    document.addEventListener('DOMContentLoaded', (e) => {
        setTimeout(()=>{
            splash.classList.add('display-none');
        }, 1500);
    })
}

 function toggler(){
    document.getElementById("menu-toggler").addEventListener("click", ubah);
    function ubah() {
        const copyright = document.getElementById("copyright");
        const caption = document.querySelector(".lead");
        const about = document.querySelector(".custom-btn-banner");
        caption.classList.toggle('copy')
        about.classList.toggle('copy')
        copyright.classList.toggle('copy')
    }
 }

splash();
toggler();

const desc_home = document.querySelector(".lead")
const switchlang = `<div class="container langbtn" style="margin-top:-10px !important">
<div class="d-flex justify-content-center">
<h5 style="color:white !important">Bahasa</h5>
<label class="switch">
<input type="checkbox" id="yes">
<span class="slider round"></span>
</label><h5 style="color:white !important">English</h5></div></div>`
desc_home.insertAdjacentHTML('beforebegin',switchlang);
const checkbox = document.querySelector('input[type="checkbox"]');

cookiearray = document.cookie.split(';');
for(var i=0; i<cookiearray.length; i++) {
    value = cookiearray[i].split('=')[1];
 }
 
if (value == "check" || value == "uncheck" ){
    if (window.location.pathname=="/"){
        // page about
        if(value=="uncheck"){  
            checkbox.removeAttribute("checked")
            checkbox.checked=false  
            $('[data-localize]').localize("/js/mylanguage",{language:"id"});
        
        }else if (value=="check"){   
            let setCheck = document.createAttribute("checked") ; 
            checkbox.setAttributeNode(setCheck)   
            checkbox.checked=true      
            $('[data-localize]').localize("/js/mylanguage",{language:"en"});     
        }
    }  
} else {
    if (navigator.language != "id"){
        checkbox.checked = true;
        if (window.location.pathname=="/"){
            $('[data-localize]').localize("/js/mylanguage",{language:"en"});
            
        }
    
    }else{
        checkbox.checked = false;
        if (window.location.pathname=="/"){
            $('[data-localize]').localize("/js/mylanguage",{language:"id"});            
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


