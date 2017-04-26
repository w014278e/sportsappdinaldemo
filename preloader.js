var preloader;

function myFunction() {
    preloader = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("appcontent").style.display = "block";
}