const drop_btn = document.querySelector(".dropdown");

drop_btn.addEventListener('mouseover', function () {
     document.querySelector(".dropdown-content").classList.toggle('show');
});