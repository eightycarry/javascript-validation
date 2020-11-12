$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName: {
                required: true
            },

            grade: {
                required: true,
                min: 5,
                max: 8,
                digits: true
            }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName: {
                required: "Name required"
            },

            grade: {
                required: "Must enter your grade",
                min: "Campers must be in grades 5-8",
                max: "Campers must be in grades 5-8",
                digits: "Numbers only please!"
            }
        }

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram(),
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        var name = $("#firstName").val();
        var grade = $("#grade").val();
        $("#message").text('You have successfully registered $(name) for grade $(grade) camp.\n' +
            'See you soon!')
    };



});