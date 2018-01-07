jQuery(function () {

    $.get("https://www.prevision-meteo.ch/services/json/cannes", function (data) {
        $('#nomVille').append(data.city_info.name);
        $('#imgFrctDay').attr('src', data.fcst_day_0.icon);
        $('#tempMax').append("Max : " + data.fcst_day_0.tmax + " °C");
        $('#tempMin').append("Min : " + data.fcst_day_0.tmin + " °C");
        for (var $i = 0; $i <= 20; $i = $i + 4) {
            var source = $i + "H00";
            $('#imgFrctH' + $i).attr('src', data.fcst_day_0.hourly_data[source].ICON);
            $('#tempFrctH' + $i).append(data.fcst_day_0.hourly_data[source].TMP2m + " °C");
            $('#conditionFrctH' + $i).append(data.fcst_day_0.hourly_data[source].CONDITION);

        }
    }, "json");


    $("body").css("display", "none");

    $("body").fadeIn(2000);



    function redirectPage() {
        window.location = linkLocation;
    }


    $(".avignon").click(function () {
        location.href = "avignon.html#debutpage";
    });

    $(".accueil").click(function () {
        location.href = "accueil.html";
    });

    $(".cannes").click(function () {
        location.href = "cannes.html#debutpage";
    });

    $(".marseille").click(function () {
        location.href = "marseille.html#debutpage";
    });

    $(".nice").click(function () {
        location.href = "nice.html#debutpage";
    });

    $(".voirPlus").click(function () {
        location.href = "voirPlus.html#debutpage";
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

    var scrollTop = $(".scrollTop");

    $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    }); // click() scroll top EMD





});
