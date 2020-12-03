jQuery(document).ready(function ($) {
    $('form').on('submit', function (event) {
        event.preventDefault();

        var text = $('#input').val();



        if (text == "") {
            return $('#tasks').prepend("<div class = 'alert alert-danger'> You Have To Say Something, I Cannot Read Your Mind!</div>");
        }

        else {
            return $('#tasks').prepend("<p>", text, "</p>");
        }

    });
});