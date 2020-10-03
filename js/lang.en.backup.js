navtrans = {
    nav_tentang: "About",
    nav_komitmen: "commitment",
    nav_produk: "Product",
    nav_produk_kesehatan: "Health",
    nav_produk_eposyandu: "E-Posyandu",
    nav_layanan: "Services",    
    nav_layanan_webinar: "Webinar",
    nav_layanan_pelatihan: "Training",
    nav_kontak: "Contact",
}

navtrans_ind = {
    nav_tentang: "Tentang",
    nav_komitmen: "Komitmen",
    nav_produk: "Produk",
    nav_produk_kesehatan: "Kesehatan",
    nav_produk_eposyandu: "E-Posyandu",
    nav_layanan: "Layanan",    
    nav_layanan_webinar: "Webinar",
    nav_layanan_pelatihan: "Pelatihan",
    nav_kontak: "Kontak",
}

about_pgTrans = {
    judul1 : "About Us",
    desc: `<strong>Peltops</strong> is a company engaged in technology, especially Artificial Intelligence. Peltops has a goal that is to help and facilitate people, especially in the fields of health and culture.`,
    judul2: "Our Teams",
}
about_pgTrans_ind = {
    judul1 : "Tentang Kami",
    desc: `<strong>Peltops</strong> adalah sebuah organisasi / company yang bergerak dalam bidang teknologi khususnya Artificial intellegence (kecerdasan buatan). Peltops memiliki tujuan yaitu untuk membantu dan mempermudah manusia khususnya dalam bidang kesehatan dan budaya.`,
    judul2: "Tim Kami",
}

komitmen_pgTrans = {
    judul1 : "Our Commitment",
}
komitmen_pgTrans_ind = {
    judul1 : "Komitmen Kami",
}

kontak_pgTrans = {
    judul1 : "Contact Us",
}
kontak_pgTrans_ind = {
    judul1 : "Kontak Kami",
}
webinar_pgTrans = {
    subjudul1 : "Text Processing (NLP) Using Artificial Intelligence",
    desc1 : 'The webinar entitled "Text Processing (NLP) Using Artificial Intelligence" was held online on August 29, 2020, and was attended by around 17 participants consisting of students and lecturers from Unsyiah and Unsam. This activity lasts for 2 hours.',
}
webinar_pgTrans_ind = {
    subjudul1 : "Pemrosesan Teks (NLP) Menggunakan Kecerdasan Buatan",
    desc1 : 'Webinar dengan judul "Pemrosesan Teks (NLP) Menggunakan Kecerdasan Buatan" telah dilaksanakan pada tanggal 29 Agustus 2020 secara online dan diikuti oleh sekitar 17 orang peserta yang terdiri dari mahasiswa dan dosen dari Unsyiah dan Unsam. Webinar berlangsung selama 2 jam.',
}

pelatihan_pgTrans = {
    judul1: "Training",
    subjudul1 : "Flutter for Beginners",
    desc1 : 'Flutter for beginners was held on 26 September 2020 The selection process for participants was carried out on 8-17 September 2020 through file selection and interviews. There are about 16 participants who registered who were still students and alumni.',
}
pelatihan_pgTrans_ind = {
    judul1: "Pelatihan",
    subjudul1 : "Training Flutter untuk Pemula",
    desc1 : 'Training flutter untuk pemula sudah dilaksanakan pada tgl 26 September 2020 Proses seleksi peserta telah dilakukan pada tanggal 8-17 september 2020 melalui seleksi berkas dan wawancara. Peserta yang mendaftar ada sekitar 16 orang yang masih berstatus mahasiswa maupun alumni.    ',
}



const navlink = document.querySelectorAll(".nav-link")
const droplink = document.querySelectorAll(".dropdown-item")

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

if (navigator.language != "id"){
    checkbox.checked = true;
}else{
    checkbox.checked = false;
}



function nama(){
    // document.addEventListener('DOMContentLoaded', function () {
        
        checkbox.addEventListener('change', function () {  
          if (checkbox.checked) {
            // document.cookie = "name=" + "check" + "; path=/";
            ubahLang()

          } else if (!checkbox.checked) {
            // do that
            // document.cookie = "name=" + "uncheck"  + "; path=/";
            ubahLangId()
          }
        });
    //   });
}
nama() ;
// cookiearray = document.cookie.split(';');
// for(var i=0; i<cookiearray.length; i++) {
//     value = cookiearray[i].split('=')[1];
//  }
// if(value=="uncheck"){  
//     checkbox.removeAttribute("checked")
//     checkbox.checked=false  
// }else if (value=="check"){   
//     let setCheck = document.createAttribute("checked") ; 
//     checkbox.setAttributeNode(setCheck)   
//     checkbox.checked=true       
// }





function ubahLang(){
//page home
if (window.location.pathname=="/src/about/"){
    // page about
    const judul1 = document.getElementById("about").firstElementChild
    const desc_about = document.querySelector(".text-about").firstElementChild
    const judul2 = document.getElementById("tim-kami").firstElementChild
    ubahNavEn();

    //about
    judul1.innerHTML=about_pgTrans.judul1;
    desc_about.innerHTML = about_pgTrans.desc;
    judul2.innerHTML=about_pgTrans.judul2;
    
    
}
else if (window.location.pathname=='/src/komitmen/'){
    
    //page komitmen
    const judul1 = document.getElementById("komitmen").firstElementChild
    ubahNavEn();
    //komitmen
    judul1.innerHTML=komitmen_pgTrans.judul1;
    
    
}else if (window.location.pathname=='/src/kontak/'){
   
    //page kontak
    const judul1 = document.getElementById("contact").firstElementChild
    ubahNavEn();
    //kontak
    judul1.innerHTML=kontak_pgTrans.judul1;
    
    
}else if (window.location.pathname=='/src/layanan/webinar/'){
    
    //page webinar
    const subjudul1 = document.querySelectorAll(".card-title")
    const desc1 =document.querySelectorAll(".card-text")

    ubahNavEn();
    //webinar
    subjudul1[0].innerHTML=webinar_pgTrans.subjudul1;
    desc1[0].innerHTML=webinar_pgTrans.desc1
    
    
}else if (window.location.pathname=='/src/layanan/pelatihan/'){
   
    //page pelatihan
    const judul1 = document.getElementById("pelatihan").firstElementChild
    const subjudul1 = document.querySelectorAll(".card-title")
    const desc1 =document.querySelectorAll(".card-text")

    ubahNavEn();

     //Pelatihan
    judul1.innerHTML=pelatihan_pgTrans.judul1;
    subjudul1[0].innerHTML=pelatihan_pgTrans.subjudul1;
    desc1[0].innerHTML=pelatihan_pgTrans.desc1
    
}
}
function ubahLangId(){
    //page home
    if (window.location.pathname=="/src/about/"){
        // page about
        const judul1 = document.getElementById("about").firstElementChild
        const desc_about = document.querySelector(".text-about").firstElementChild
        const judul2 = document.getElementById("tim-kami").firstElementChild
    
        ubahNavId();
        
        //about
        judul1.innerHTML=about_pgTrans_ind.judul1;
        desc_about.innerHTML = about_pgTrans_ind.desc;
        judul2.innerHTML=about_pgTrans_ind.judul2;
        
        
    }
    else if (window.location.pathname=='/src/komitmen/'){
        
        //page komitmen
        const judul1 = document.getElementById("komitmen").firstElementChild
    
        ubahNavId();
        
        //komitmen
        judul1.innerHTML=komitmen_pgTrans_ind.judul1;
        
        
    }else if (window.location.pathname=='/src/kontak/'){
       
        //page kontak
        const judul1 = document.getElementById("contact").firstElementChild
    
        ubahNavId();
        
        //kontak
        judul1.innerHTML=kontak_pgTrans_ind.judul1;
        
        
    }else if (window.location.pathname=='/src/layanan/webinar/'){
        
        //page webinar
        const subjudul1 = document.querySelectorAll(".card-title")
        const desc1 =document.querySelectorAll(".card-text")
    
        ubahNavId();
        
        //webinar
        subjudul1[0].innerHTML=webinar_pgTrans_ind.subjudul1;
        desc1[0].innerHTML=webinar_pgTrans_ind.desc1
        
        
    }else if (window.location.pathname=='/src/layanan/pelatihan/'){
       
        //page pelatihan
        const judul1 = document.getElementById("pelatihan").firstElementChild
        const subjudul1 = document.querySelectorAll(".card-title")
        const desc1 =document.querySelectorAll(".card-text")
        ubahNavId();
         
        //Pelatihan
        judul1.innerHTML=pelatihan_pgTrans_ind.judul1;
        subjudul1[0].innerHTML=pelatihan_pgTrans_ind.subjudul1;
        desc1[0].innerHTML=pelatihan_pgTrans_ind.desc1
        
    }
    }

    function ubahNavEn (){

        navlink[1].innerHTML = navtrans.nav_tentang;
        navlink[2].innerHTML = navtrans.nav_komitmen; 
        navlink[3].innerHTML = navtrans.nav_produk; 
        navlink[4].innerHTML = navtrans.nav_layanan; 
        navlink[5].innerHTML = navtrans.nav_kontak;    
        droplink[0].innerHTML = navtrans.nav_produk_kesehatan;
        droplink[1].innerHTML = navtrans.nav_produk_eposyandu;
        droplink[2].innerHTML = navtrans.nav_layanan_webinar;
        droplink[3].innerHTML = navtrans.nav_layanan_pelatihan; 
    
    }

    function ubahNavId () {
        navlink[1].innerHTML = navtrans_ind.nav_tentang;
        navlink[2].innerHTML = navtrans_ind.nav_komitmen; 
        navlink[3].innerHTML = navtrans_ind.nav_produk; 
        navlink[4].innerHTML = navtrans_ind.nav_layanan; 
        navlink[5].innerHTML = navtrans_ind.nav_kontak;    
        droplink[0].innerHTML = navtrans_ind.nav_produk_kesehatan;
        droplink[1].innerHTML = navtrans_ind.nav_produk_eposyandu;
        droplink[2].innerHTML = navtrans_ind.nav_layanan_webinar;
        droplink[3].innerHTML = navtrans_ind.nav_layanan_pelatihan; 
    
    }
