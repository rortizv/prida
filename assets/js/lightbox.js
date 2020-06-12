function openModal1() {
    document.getElementById("myModal1").style.display = "block";
}

function closeModal1() {
    document.getElementById("myModal1").style.display = "none";
}

function openModal2() {
    document.getElementById("myModal2").style.display = "block";
}

function closeModal2() {
    document.getElementById("myModal2").style.display = "none";
}

function openModal3() {
    document.getElementById("myModal3").style.display = "block";
}

function closeModal3() {
    document.getElementById("myModal3").style.display = "none";
}

function openModal4() {
    document.getElementById("myModal4").style.display = "block";
}

function closeModal4() {
    document.getElementById("myModal4").style.display = "none";
}

function openModal5() {
    document.getElementById("myModal5").style.display = "block";
}

function closeModal5() {
    document.getElementById("myModal5").style.display = "none";
}

function openModal6() {
    document.getElementById("myModal6").style.display = "block";
}

function closeModal6() {
    document.getElementById("myModal6").style.display = "none";
}

function openModal7() {
    document.getElementById("myModal7").style.display = "block";
}

function closeModal7() {
    document.getElementById("myModal7").style.display = "none";
}

function openModal8() {
    document.getElementById("myModal8").style.display = "block";
}

function closeModal8() {
    document.getElementById("myModal8").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}