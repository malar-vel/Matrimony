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
/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}