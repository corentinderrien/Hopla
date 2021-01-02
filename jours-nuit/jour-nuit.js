$(document).ready(function() {

    var horaire=new Date();
    var heures=horaire.getHours();
    var imamage="";

    if ( heures>07 && heures<22 )
    {
    imamage="../Images/img.jpg";
    document.getElementById("divimage").src=imamage;
    }

    else 
    {
    imamage="../Images/img2.jpeg";
    document.getElementById("divimage").src=imamage;
    }

});