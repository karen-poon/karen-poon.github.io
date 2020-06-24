var collapse = document.getElementsByClassName("ed-coursework");

collapse[0].addEventListener("click", function() {
    collapse[0].firstElementChild.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
      collapse[0].firstElementChild.innerText = "⮞ Coursework"
    } else {
      content.style.display = "flex";
      collapse[0].firstElementChild.innerText = "⮟ Coursework"
    }
});

collapse[1].addEventListener("click", function() {
    collapse[1].firstElementChild.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
        content.style.display = "none";
        collapse[1].firstElementChild.innerText = "⮞ Coursework"
    } else {
        content.style.display = "flex";
        collapse[1].firstElementChild.innerText = "⮟ Coursework"
    }
});
