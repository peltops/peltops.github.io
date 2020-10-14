// Get HTML head element 
var head = document.getElementsByTagName('HEAD')[0]; 
// Create new link Element 
var link = document.createElement('link'); 
// set the attributes for link element 
link.rel = 'stylesheet'; 
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/css/flag-icon.min.css'; 
// Append link element to HTML head 
head.appendChild(link); 



const bannerdiv = document.querySelector(".banner-div");
const navbar = document.querySelector(".navbar-nav");
const tombol_bahasa = `<div class="dropdown">
<button
  class="btn btn-secondary dropdown-toggle"
  type="button"
  id="dropdownMenuButton"
  data-toggle="dropdown"
  aria-haspopup="true"
  aria-expanded="false"
>
  
</button>
<div
  class="dropdown-menu dropdown-menu-right text-lg-right language"
>
</div>`
navbar.insertAdjacentHTML('beforeend', tombol_bahasa);
const langBtn = document.getElementById("dropdownMenuButton");
const langDrop = document.querySelector(".language");


// const switchlang = `<div class="container langbtn">
// <div class="d-flex justify-content-center">
// <h5>Bahasa</h5>
// <label class="switch">
// <input type="checkbox" id="yes">
// <span class="slider round"></span>
// </label><h5>English</h5></div></div>`
// bannerdiv.insertAdjacentHTML('beforebegin',switchlang);
// const checkbox = document.querySelector('input[type="checkbox"]');

cookiearray = document.cookie.split(';');
for(var i=0; i<cookiearray.length; i++) {
    value = cookiearray[i].split('=')[1];
 }
 
if (value == "check" || value == "uncheck" ){
    if (window.location.pathname=="/" || window.location.pathname=="/index.html"){
        // page home
        if(value=="uncheck"){  
            langBtn.insertAdjacentHTML('beforeend', `<span class="flag-icon flag-icon-id"></span> ID`)
            langDrop.insertAdjacentHTML('beforeend',`<a class="dropdown-item langEN"><span class="flag-icon flag-icon-us"> </span> EN</a>`);
            langen();
            $('[data-localize]').localize("/js/mylanguage",{language:"id"});
        
        }else if (value=="check"){   
            langBtn.insertAdjacentHTML('beforeend', `<span class="flag-icon flag-icon-us"></span> EN`)
            langDrop.insertAdjacentHTML('beforeend',`<a class="dropdown-item langID"><span class="flag-icon flag-icon-id"> </span> ID</a>`);    
            langid(); 
            $('[data-localize]').localize("/js/mylanguage",{language:"en"});     
        }
    }
    else if (window.location.pathname=="/src/about/" || window.location.pathname=='/src/komitmen/' || window.location.pathname=='/src/kontak/'){
        // page about
        if(value=="uncheck"){  
            langBtn.insertAdjacentHTML('beforeend', `<span class="flag-icon flag-icon-id"></span> ID`)
            langDrop.insertAdjacentHTML('beforeend',`<a class="dropdown-item langEN"><span class="flag-icon flag-icon-us "> </span> EN</a>`);
            langen(); 
            $('[data-localize]').localize("../../js/mylanguage",{language:"id"});
        
        }else if (value=="check"){   
            langBtn.insertAdjacentHTML('beforeend', `<span class="flag-icon flag-icon-us"></span> EN`)
            langDrop.insertAdjacentHTML('beforeend',`<a class="dropdown-item langID"><span class="flag-icon flag-icon-id"> </span> ID</a>`);    
            langid(); 
            $('[data-localize]').localize("../../js/mylanguage",{language:"en"});     
        }
    }
    else if (window.location.pathname=='/src/layanan/webinar/' || window.location.pathname=='/src/layanan/pelatihan/'){
        
        //page webinar
        if(value=="uncheck"){  
            langBtn.insertAdjacentHTML('beforeend', `<span class="flag-icon flag-icon-id"></span> ID`)
            langDrop.insertAdjacentHTML('beforeend',`<a class="dropdown-item langEN"><span class="flag-icon flag-icon-us"> </span> EN</a>`); 
            langen(); 
            $('[data-localize]').localize("../../../js/mylanguage",{language:"id"});
        
        }else if (value=="check"){   
            langBtn.insertAdjacentHTML('beforeend', `<span class="flag-icon flag-icon-us"></span> EN`)
            langDrop.insertAdjacentHTML('beforeend',`<a class="dropdown-item langID"><span class="flag-icon flag-icon-id"> </span> ID</a>`);    
            langid(); 
            $('[data-localize]').localize("../../../js/mylanguage",{language:"en"});   
        }
    }
} else {
    if (navigator.language != "id"){
        if (window.location.pathname=="/" || window.location.pathname=="/index.html"){
            langBtn.insertAdjacentHTML('beforeend', `<span class="flag-icon flag-icon-us"></span> EN`)
            langDrop.insertAdjacentHTML('beforeend',`<a class="dropdown-item langID"><span class="flag-icon flag-icon-id"> </span> ID</a>`);            
            langid(); 
            $('[data-localize]').localize("/js/mylanguage",{language:"en"});            
        }   
        else if (window.location.pathname=="/src/about/" || window.location.pathname=='/src/komitmen/' || window.location.pathname=='/src/kontak/'){
            langBtn.insertAdjacentHTML('beforeend', `<span class="flag-icon flag-icon-us"></span> EN`)
            langDrop.insertAdjacentHTML('beforeend',`<a class="dropdown-item langID"><span class="flag-icon flag-icon-id"> </span> ID</a>`);            
            langid(); 
            $('[data-localize]').localize("../../js/mylanguage",{language:"en"});
            
        }
        else if (window.location.pathname=='/src/layanan/webinar/' || window.location.pathname=='/src/layanan/pelatihan/'){            
            //page webinar         
            langBtn.insertAdjacentHTML('beforeend', `<span class="flag-icon flag-icon-us"></span> EN`)  
            langDrop.insertAdjacentHTML('beforeend',`<a class="dropdown-item langID"><span class="flag-icon flag-icon-id"> </span> ID</a>`);             
            langid(); 
            $('[data-localize]').localize("../../../js/mylanguage",{language:"en"});
            
        }

    
    }else{
        if (window.location.pathname=="/" || window.location.pathname=="/index.html"){
            langBtn.insertAdjacentHTML('beforeend', `<span class="flag-icon flag-icon-id"></span> ID`)
            langDrop.insertAdjacentHTML('beforeend',`<a class="dropdown-item langEN"><span class="flag-icon flag-icon-us"> </span> EN</a>`); 
            langen(); 
            $('[data-localize]').localize("/js/mylanguage",{language:"id"});            
        }
        else if (window.location.pathname=="/src/about/" || window.location.pathname=='/src/komitmen/' || window.location.pathname=='/src/kontak/'){
            langBtn.insertAdjacentHTML('beforeend', `<span class="flag-icon flag-icon-id"></span> ID`)
            langDrop.insertAdjacentHTML('beforeend',`<a class="dropdown-item langEN"><span class="flag-icon flag-icon-us"> </span> EN</a>`); 
            langen(); 

            $('[data-localize]').localize("../../js/mylanguage",{language:"id"});
            
        }
        else if (window.location.pathname=='/src/layanan/webinar/' || window.location.pathname=='/src/layanan/pelatihan/'){            
            //page webinar            
            langBtn.insertAdjacentHTML('beforeend', `<span class="flag-icon flag-icon-id"></span> ID`)
            langDrop.insertAdjacentHTML('beforeend',`<a class="dropdown-item langEN"><span class="flag-icon flag-icon-us"> </span> EN</a>`); 
            langen(); 

            $('[data-localize]').localize("../../../js/mylanguage",{language:"id"});
            
        }
    }

}
function langen(){
    // const langIDBtn = document.querySelector(".langID");
    const langENBtn = document.querySelector(".langEN");
    langENBtn.addEventListener('click',function(){
        document.cookie = "name=" + "check" + "; path=/";
            location.reload();
    })
}
function langid(){
    // const langIDBtn = document.querySelector(".langID");
    const langIDBtn = document.querySelector(".langID");
    langIDBtn.addEventListener('click',function(){
        document.cookie = "name=" + "uncheck" + "; path=/";
            location.reload();
    })
}


// function nama(){
//     document.addEventListener('DOMContentLoaded', function () {
        
//         checkbox.addEventListener('change', function () {  
//           if (checkbox.checked) {
//             document.cookie = "name=" + "check" + "; path=/";
//             location.reload();
//           } else if (!checkbox.checked) {
//             // do that
//             document.cookie = "name=" + "uncheck"  + "; path=/";
//             location.reload();
//           }
//         });
//       });
// }
// nama() ;





