$(document).ready(function(){
    $currentYear = new Date().getFullYear();
    $("#year").text($currentYear);

     // Scroll to services
     $("#goto_services").click(function(){
        console.log('Go to Services');
        const services = document.getElementById("services");
        services.scrollIntoView();
    });
});
