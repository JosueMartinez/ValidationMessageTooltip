

function Tipsonize(input, message) {
    //creating alert
    var alert = $("<span></span>");
    alert.addClass("alert-style");
    alert.addClass("glyphicon");
    alert.addClass("glyphicon-exclamation-sign");  //icon
    alert.addClass("validationAlert");  //class used by tipso as selector

    input.after(alert);
    $(".validationAlert").tipso({
        titleBackground: 'red',
        titleColor: 'white',
        background: 'silver',
        color: 'black',
        titleContent: 'Attention',
        content: message,
        position: 'right',
        maxWidth: 100,
        useTitle: false
    });

    positionAlert(input,alert);  //position alert in input according to text orientation
}

function positionAlert(input, alert) {

    var type = input.attr("type");  //getting input type
    if (type === "number") {
        //if type is number text is oriented to right and need to place alert on left
        alert.addClass("alert-left");
        return;
    }
 
    if (type === "text") {
        //for default text is oriented to left but if is oriented to right then place alert on left
        if (input.hasClass("text-right")) {
            alert.addClass("alert-left");
        } else {
            //if not then place alert on the right 
            alert.addClass("pull-right");   //making sure it goes to the very end
            alert.addClass("alert-right");
        }
    }

}


function getValidationMessages() {
    $(".field-validation-error").hide();   //hiding validation message from ValidationMessageFor helper
    var errors = $(".field-validation-error");  

    errors.each(function () {
        //getting correspondent model
        var model = $(this).data("valmsg-for");
        
        var validationMessage = $(this).text();
        //get model input
        var input = $("#" + model);
        //create tipso tooltip alert message
        Tipsonize(input, validationMessage);
    });
}

