$(document).ready(function(){
    $currentYear = new Date().getFullYear();
    $("#year").text($currentYear);

     // Scroll to services
     $("#goto_services").click(function(){
        console.log('Go to Services');
        const services = document.getElementById("services");
        services.scrollIntoView();
    });

    //Change theme
    $("#default-theme").click(function(){
      changeTheme('default');
    });
    $("#red-theme").click(function(){
      changeTheme('red');
    });
    $("#blue-theme").click(function(){
      changeTheme('blue');
    });

    changeNavBackground();
});

function changeNavBackground(){
    window.onscroll = function() {
    var currentScrollPos = window.scrollY;
  
    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > 20) {
      document.getElementById("primary-nav").style.boxShadow = "2px 2px 8px 2px #000";
    } else {
      document.getElementById("primary-nav").style.boxShadow = "0px 0px 0px 0px transparent";
    }
  }
}

function changeTheme(theme){
  const $themeStyle = document.getElementById('theme');
  const $telecomms = document.getElementById("img-telecomms");
  const $cyber = document.getElementById("img-cyber");
  const $data = document.getElementById("img-data");
  const $software = document.getElementById("img-software");
  const $training = document.getElementById("img-training");
  

  if (theme ===  'default'){
    $themeStyle.setAttribute("href", "css/themes/default.css");
    $telecomms.setAttribute("src", "images/icons/telecommunication.png");
    $cyber.setAttribute("src", "images/icons/cybersecurity.png");
    $data.setAttribute("src", "images/icons/data-management.png");
    $software.setAttribute("src", "images/icons/custom.png");
    $training.setAttribute("src", "images/icons/training.png");
    
  }
  else if (theme === 'red'){
    $themeStyle.setAttribute("href", "css/themes/red.css");
    $telecomms.setAttribute("src", "images/icons/telecommunication-alt.png");
    $cyber.setAttribute("src", "images/icons/cybersecurity-alt.png");
    $data.setAttribute("src", "images/icons/data-management-alt.png");
    $software.setAttribute("src", "images/icons/custom-alt.png");
    $training.setAttribute("src", "images/icons/training-alt.png");
  }
  else if (theme === 'blue'){
    $themeStyle.setAttribute("href", 'css/themes/blue.css');
    $telecomms.setAttribute("src", "images/icons/telecommunication-alt.png");
    $cyber.setAttribute("src", "images/icons/cybersecurity-alt.png");
    $data.setAttribute("src", "images/icons/data-management-alt.png");
    $software.setAttribute("src", "images/icons/custom-alt.png");
    $training.setAttribute("src", "images/icons/training-alt.png");
  }
}

