jQuery(function () {


    $("body").css("display", "none");

    $("body").fadeIn(2000);

    $("a.transition").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(5000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }


    $("#avignon").click(function () {
        location.href = "avignon.html";
    });

    $("#accueil").click(function () {
        location.href = "accueil.html";
    });

    $("#cannes").click(function () {
        location.href = "cannes.html#debutpage";
    });

    $("#marseille").click(function () {
        location.href = "marseille.html";
    });

    $("#nice").click(function () {
        location.href = "nice.html";
    });

    $("#voirPlus").click(function () {
        location.href = "voirPlus.html";
    });

    $('a').on('click', function (evt) {
        // bloquer le comportement par défaut: on ne rechargera pas la page
        
        // enregistre la valeur de l'attribut  href dans la variable target
        var target = $(this).attr('href');
        /* le sélecteur $(html, body) permet de corriger un bug sur chrome 
        et safari (webkit) */
        $('html, body')
            // on arrête toutes les animations en cours 
            .stop()
            /* on fait maintenant l'animation vers le haut (scrollTop) vers 
             notre ancre target */
            .animate({
                scrollTop: $(target).offset().top
            }, 1000);
    });


});
