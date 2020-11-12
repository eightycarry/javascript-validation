$(document).ready(function(){

    var myRules = {

        bananas: {
            required: true
        },
        koalas: {
            required: true,
            min: 1,
            max: 10,
            digits: true
        }

    };

    var myMessages = {

        bananas: {
            required: "Fill this in!"
        },
        koalas: {
            required: "Must have some koalas",
            min: "Not enough koalas",
            max: "Too many koalas",
            digits: "You are bad at this form"
        }

    };

    function feedKoalas() {
        var brand = $("#bananas").val();
        var numKoalas = $("#koalas").val();
        $("p").text('You fed ${brand} bananas to ${numKoalas} koalas');
    }

    $("form").validate();

});