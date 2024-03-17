$(document).ready(function(){
    $currentYear = new Date().getFullYear();
    $("#year").text($currentYear);

     // Scroll to services
     $("#goto_services").click(function(){
        console.log('Go to Services');
        const services = document.getElementById("services");
        services.scrollIntoView();
    });

    changeBackground();
});

function changeBackground(){
    window.onscroll = function() {
    var currentScrollPos = window.scrollY;
  
    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > 20) {
      // I am using 'display' instead of 'top':
      document.getElementById("primary-nav").style.boxShadow = "2px 2px 8px 2px #8d0220";
    } else {
      document.getElementById("primary-nav").style.boxShadow = "2px 2px 4px 4px #fff";
    }
  }
}

