$(".buttons").hide();
$("#album-container").hide();

// $(".container").addClass($("#front-page"));

$("#albums-main").children().click(function(){
  event.preventDefault();
  $(".buttons").fadeIn("medium");
  $("#front-page").hide();
  $("#album-container").show();
});

$("button, input[type='button']").click(function(event){
  event.preventDefault();

  var butVal = $(this).data('value');
  var albVal = $(".album-wrapper").data('value');

  $(".album-wrapper").each(function(){

  if ( butVal = albVal) {

  $(".album-wrapper").show();
  }
  else {
    $(".album-wrapper").hide();
  }
});
});



//need to get album-page to:
// float:none display: block

////Code to use in future//////
// $('.gallery img').each(function(i) {
//     $(this).attr('id', 'img' + i);
//     // You can also add more code here if you wish to manipulate each IMG element further
// });
