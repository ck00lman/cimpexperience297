/*========== CLOSE MOBILE NAV ON CLICK ==========*/
$(document).ready(function () { //when document loads completely.
  $(document).click(function (event) { //click anywhere
      var clickover = $(event.target); //get the target element where you clicked
      var _opened = $(".navbar-collapse").hasClass("show"); //check if element with 'navbar-collapse' class has a class called show. Returns true and false.
      if (_opened === true && !clickover.hasClass("navbar-toggler")) { // if _opened is true and clickover(element we clicked) doesn't have 'navbar-toggler' class
          $(".navbar-toggler").click(); //toggle the navbar; close the navbar menu in mobile.
      }
  });
});



/*========== LIGHTBOX GALLERY SETTINGS
https://lokeshdhakar.com/projects/lightbox2/ ==========*/

$(document).ready(function(){ 
  lightbox.option({
    'resizeDuration': 700,
    'wrapAround': false,
    'imageFadeDuration': 600
  })
});

