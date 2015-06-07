$(".buttons").hide();
$("#album-container").hide();
$(".album-wrapper").hide();
$('input[value="Back"]').hide()

///////////////////////////////////////////////
// Need to make clicking on individual albums
// display coordinating album

$("#albums-main").children().click(function(){
  event.preventDefault();
  $(".buttons").fadeIn("medium");
  $("#front-page").hide()
  $("#album-container").show();
});

///////////////////////////////////////////////


///////////////////////////////////////////////
///here I need to input the 1st image of the album into the
/// album cover page


var i = $(".album").attr('id')

$('.album-cover:nth-child(2)').prepend($("#a1:nth-child(2)").children().children().eq(0));



///////////////////////////////////////////////


///////////////////////////////////////////////
//here I need to make buttons display
//coordinating album

$(".button").click(function(event){
 event.preventDefault();

 $(".album-wrapper").filter(function(){

 var butVal = $(this).data('value');

 var albVal = $(".album-wrapper").data('value')


});
  console.log($(this).data('value'));
  console.log( $('.album-wrapper[data-value= "butVal"]'));
});
///////////////////////////////////////////////


//////////////////////////////////////////////

// When click on image in album make image
// go full screen and fade out background



//////////////////////////////////////////////


///////////////////////////////////////////////
// need to add button to go back to
// main albums page

///////////////////////////////////////////////


///////////////////////////////////////////////
// need to make button go back to
// album page
