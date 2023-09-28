$(document).ready(function () {

// selecting the form after submission
    $("#appointment").submit(function(event) {

// preventing all default event of the form        
        event.preventDefault();

// collect user entry
const inputFullName = $("#full-name").val()    
const inputPurpose = $("#purpose").val()
const inputTime = $("#time").val()
const inputDate = $("#date").val()

//Append the name of the Applicant to the return message
$(".full-name").html(inputFullName)


//show the story
$("#image").fadeIn();
$("#custom").fadeOut();


    })
   

   
})