jQuery(function () {

    $(".signup").hide();
    $(".theme").hide();
    $(".test").hide();
    $(".quest").hide();
    $("#signup-box-link").click(function () {
        $(".login").fadeOut(10);
        $(".signup")
            .delay(10)
            .fadeIn(30);
        $(".login").removeClass("active");
        $(".signup").addClass("active");
        $("#login-box-link").removeClass("active");
        $("#login-box-link").addClass("inactive");
        $("#signup-box-link").removeClass("inactive");
        $("#signup-box-link").addClass("active");
        $("#signup-box-link").removeClass("underlineHover");
        $("#login-box-link").addClass("underlineHover");
        $(".erreur").html('');
    });
    $("#login-box-link").click(function () {
        $(".signup").fadeOut(10);
        $(".login")
            .delay(10)
            .fadeIn(30);
        $(".signup").removeClass("active");
        $(".login").addClass("active");
        $("#signup-box-link").removeClass("active");
        $("#signup-box-link").addClass("inactive");
        $("#login-box-link").removeClass("inactive");
        $("#login-box-link").addClass("active");
        $("#login-box-link").removeClass("underlineHover");
        $("#signup-box-link").addClass("underlineHover");
        $(".erreur").html('');
    });
    $(".signup").submit(function (event) {
        var pass = $('.signup').find("#password").val();
        var passVerif = $("#passwordVerif").val();
        if (pass == passVerif)
            return;
        $(".erreur").html('Les mots de passe ne correspondent pas');
        event.preventDefault();
    });
    $("#addTheme").click(function () {
        if ($(".theme").hasClass('active')) {
            $(".theme").fadeOut(1000);
            $(".theme").removeClass("active");
        } else {
            $(".theme").fadeIn(1000);
            $(".theme").addClass("active");
        }

    });
    $("#addTest").click(function () {
        if ($(".test").hasClass('active')) {
            $(".test").fadeOut(1000);
            $(".test").removeClass("active");
        } else {
            $(".test").fadeIn(1000);
            $(".test").addClass("active");
        }

    });
    $("#addQuest").click(function () {
        if ($(".quest").hasClass('active')) {
            $(".quest").fadeOut(1000);
            $(".quest").removeClass("active");
        } else {
            $(".quest").fadeIn(1000);
            $(".quest").addClass("active");
        }

    });
    $("input[name=nbRep]").change(function () {
        //alert($("input[name=nbRep]:checked").val());
        $("#dynamicInput").html('');
        var insert = "";
        insert += "<thead><th></th><th>Texte</th><th>Valide ?</th>"
        for (var i = 1; i <= $("input[name=nbRep]:checked").val(); i++) {
            insert += '<tr>';
            insert += '<td><h2>Réponse ' + i + '</h2></td>';
            insert += '<td><input type="text" name="rep' + i + '" required ></td>';
            insert += '<td><input class="display" type="checkbox" name="v' + i + '"></td>';
            insert += '</tr>';
        }
        $("#dynamicInput").html(insert);
    });
    $("#selectTheme").change(function () {
        var selection = $(this).find("option:selected").text();
        if (selection == "") {
            $("#tableTest").find('tr').each(function () {
                $(this).fadeIn(0)
            });
        }
        else{
            $("#tableTest").find('tr').each(function (index, elem) {

                if( $(elem).find("#theme").text() == selection)
                    $(this).fadeIn(0);
                else
                    $(this).fadeOut(0);
            });
        }


    });
});
