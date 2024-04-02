$(document).ready(function(){
    $currentYear = new Date().getFullYear();
    $("#year").text($currentYear);

     // Scroll to services
     $("#goto_services").click(function(){
        const services = document.getElementById("services");
        services.scrollIntoView();
    });

    //Show hidden content
    $("#awareness-toggle").click(function(){
      showHideContent('awareness-toggle', 'awareness-indicator');
    });

    $("#teams-toggle").click(function(){
      showHideContent('teams-toggle', 'teams-indicator');
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

function showHideContent(toggler, icon){
  var $toggle = document.getElementById(toggler);  
  var $icon = document.getElementById(icon);

  var $title = $toggle.getAttribute("title");

  if($title === "Show"){
     
    console.log("Change title to 'Hide' and icon to 'Arrow UP'");
    $toggle.setAttribute("title", "Hide");
    $('#'+icon).empty();
    $icon.innerHTML = '<i class="bi bi-arrow-up-circle"></i>';
  }
  else if($title === "Hide"){
    console.log("Change title to 'Show' and icon to 'Arrow DOWN'");
    $toggle.setAttribute("title", "Show");
    $('#'+icon).empty();
    $icon.innerHTML = '<i class="bi bi-arrow-down-circle"></i>';
  }

}