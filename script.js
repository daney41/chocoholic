document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("body").classList.add("js");
    loadheader()
    
});


//load the code from header.html
function loadheader(){
    fetch("header.html")
        .then((response) => response.text())
        .then((data) => {
        document.querySelector("#header").innerHTML = data;
    });
}

const questions = document.querySelectorAll('.question_container');

// add eventlistener to every question box
questions.forEach((question) => {
  question.addEventListener('click', () => {
    // change the answer to show or hide
    if (question.nextElementSibling.style.display === "none"){
        question.nextElementSibling.style.display = "block";
    } else {question.nextElementSibling.style.display = "none"}
  });
});

// check the original size of the window
checkWindowSize();

// check the size of the window
window.addEventListener('resize', checkWindowSize);

// check the size of the window to change the navigation bar to desktop or mobile mode
function checkWindowSize() {
  if (window.innerWidth <= 768) {
    // change to mobile mode
    document.querySelector('.desktop-menu').style.display = 'none';
    document.querySelector('.mobile-menu').style.display = 'block';
  } else {
    // change to desktop mode
    document.querySelector('.desktop-menu').style.display = 'flex';
    document.querySelector('.mobile-menu').style.display = 'none';
    dropdownMenu.style.display = 'none'; // 確保行動裝置選單收起來
  }
}



//open the side navigation bar at mobile mode
function openNav() {
    document.getElementById("menu").style.width = "40%";
}
//close the side navigation bar at mobile mode
function closeNav() {
    document.getElementById("menu").style.width = "0";
}