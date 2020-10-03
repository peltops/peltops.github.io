
// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
document.getElementById("myImg").addEventListener("click",gambar)
function gambar(){
const judul = document.getElementById("myImg").previousElementSibling
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = judul.innerHTML;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
