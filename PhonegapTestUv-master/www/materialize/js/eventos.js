
  // Initialize collapse button
  $(".brand-logo").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();

  $(document).ready(function(){
    $('.carousel').carousel();
  });


  // When the user scrolls down 20px from the top of the document, slide down the navbar
  // When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  } 
