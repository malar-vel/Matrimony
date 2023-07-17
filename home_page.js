$(".sidebar-modal").hide();
$(".sidebar").hide();
$(".menu-button").click(function(){
    $('.sidebar-modal').show();
    $(".sidebar").show('slide', {direction: 'left'}, 300);
})
$(".close-button").click(function(){
    $(".sidebar").hide();
    $(".sidebar-modal").hide();
})

// Add active class to the current button (highlight it)
var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("active-navbar");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
