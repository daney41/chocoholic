document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("body").classList.add("js");
    loadheader()

});

function loadheader(){
    fetch("header.html")
        .then((response) => response.text())
        .then((data) => {
        document.querySelector("#header").innerHTML = data;
    });
}

function toggleMenu() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

window.addEventListener('resize', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var dropdown = document.querySelector('.dropdown');
    
    if (window.innerWidth < 768) {
        menuToggle.style.display = 'block';
        dropdown.style.display = 'none';
    } else {
        menuToggle.style.display = 'none';
        dropdown.style.display = 'block';
    }
});