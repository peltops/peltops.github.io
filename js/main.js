
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

document.querySelector("#dropdownMenuButton").style.color = "white";


