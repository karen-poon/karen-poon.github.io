// collapse coursework in Education
var collapse = document.getElementsByClassName("ed-coursework");

collapse[0].addEventListener("click", function() {
    collapse[0].firstElementChild.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
      collapse[0].firstElementChild.innerText = "\u2B9E Coursework"
    } else {
      content.style.display = "flex";
      collapse[0].firstElementChild.innerText = "\u2B9F Coursework"
    }
});

collapse[1].addEventListener("click", function() {
    collapse[1].firstElementChild.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
        content.style.display = "none";
        collapse[1].firstElementChild.innerText = "\u2B9E Coursework"
    } else {
        content.style.display = "flex";
        collapse[1].firstElementChild.innerText = "\u2B9F Coursework"
    }
});

/*********************************/
// nav bar detect scroll and set active
// ref: http://jsfiddle.net/mekwall/up4nu/
// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+10,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    }),
    // nav bar (returns all elements with the nav tag)
    nav = document.getElementsByTagName('nav'),
    // menu button
    menu = document.getElementById('menu');

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;
    
    // Get id of current scroll item
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    
    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
          .children().removeClass("active")
          .end().filter("[href='#"+id+"']").children().addClass("active");
    }
    
    if (window.innerWidth <= 770) {
        if (id == "main") {
            // transition for nav bar sliding from right
            nav[0].style.right = "0";
            // transition for menu button fading out
            menu.style.opacity = 0;
            menu.style.visibility = "hidden"
        } else {
            // transition for nav bar sliding from right
            nav[0].style.right = "-56px";
            // transition for menu button fading in
            menu.style.opacity = 1;
            menu.style.visibility = "visible"
            // menu will not be active after scrolling
            menu.classList.remove("active");
        }

    } else {
        // desktop
        nav[0].style.right = "0";
        menu.style.opacity = 0;
        menu.style.visibility = "visible"
    }

    // when screen is too big, it will still treat Skills as Certifications
    // we know that when it reaches to the bottom of the screen, Skills must be active.
    // So we can just do this: make Skills active whenever it reaches bottom 
    if($(window).scrollTop() + $(window).height() >= $(document).height()) {
        lastId = "skills";
        menuItems
          .children().removeClass("active")
          .end().filter("[href='#"+lastId+"']").children().addClass("active");
    }                   
 });

/*********************************/
menu.addEventListener("click", function() {
    if (menu.classList.contains("active")) {
        nav[0].style.right = "-56px";
        this.classList.remove("active");
    } else {
        nav[0].style.right = "0";
        this.classList.toggle("active");
    }
})
