// collapse coursework in Education
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
    });

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