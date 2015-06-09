$(document).ready(function(){

  function loadTemplate(whichTemplate, data, $target) {
    var str = ""
    var compiledTmpl = _.template(templates[whichTemplate])
    data.forEach(function(el) {
      str += compiledTmpl(el)
    })
    $target.append(str);
  };

 var compiledButtons = loadTemplate('buttons', buttons, $('.buttons'));
 var compiledAlbumWrapper = loadTemplate('albumWrapper', albumWrapper, $('.row[rel="album"]'));
 var compiledAlbum1 = loadTemplate('photos', album1 , $('#Album1'));
 var compiledAlbum2 = loadTemplate('photos', album2 , $('#Album2'));
 var compiledAlbum3 = loadTemplate('photos', album3 , $('#Album3'));

 var compiledalbumCover = loadTemplate('albumCover', albumCover, $('#albums-main'))


$(".buttons").hide();
// $(".album-wrapper").hide();
$('input[value="go back"]').hide()


// var album1 = $('photos').filter(function(obj){
//   return
//
// });


///////////////////////////////////////////////
// Need to make clicking on individual albums
// display coordinating album
// 2) match that with the value of the album
//    you want to display
// 3) display the album with the value equal
//    to album value that you clicked
// 4) hide "go back" button on picture div

$("#albums-main").children().click(function(event){
  event.preventDefault();
  $(".buttons").fadeIn("medium");
  $("#front-page").hide();
  var albClick = $(this).attr('rel')
  console.log(albClick);
  var showArr =  $('.album').filter(function(obj) {
    return $(obj).attr('rel') === albClick;

    console.log(showArr);
  })


});

///////////////////////////////////////////////


///////////////////////////////////////////////
///here I need to input the 1st image of the
// album into the album cover page
// 1) get all of the album ids
// 2) put all id values into "albImg"
// 3) run the albImg through each coverImg

// var coverImg = $('.album-cover:nth-child(1)')
// var albId = $(".album").attr('id');
// var albImg =  $("#a1:nth-child(2)").children().children().eq(0).clone();
//
// (coverImg).prepend(albImg);

///////////////////////////////////////////////


///////////////////////////////////////////////

$(".button").click(function(event){
 event.preventDefault();
 var butVal
 var albVal
 var $albWraps = $('.album-wrapper');

 butVal = $(this).attr('rel');
  var albVal = $('.album-wrapper').filter(function(obj) {
     return $(obj).attr('rel') === butVal


 });
 console.log($albWraps);
 console.log(butVal);
 console.log(albVal);


  $(albVal).show();
});

///////////////////////////////////////////////


//////////////////////////////////////////////


$('.album img').click(function(event){
  event.preventDefault();
  var imgClone = $(this).clone();
  $('.overLay').append(imgClone)
  $('.overLay').show()
  $('overLay input').show()





})

$('.overLay').click(function(){
  $(this).hide();
  $(this).empty();

});




// var overLay = $('<div class="overLay"></div>');
// var img = $("<img>");
// //
// $("overLay").append(img);
// //
// $("body").append(overLay);
//
// $(".album img").click(function(event){
//   event.preventDefault();
//
//
//   $('overLay').show(this);
//
// });
//
// $('overLay').click(function(){
//   $(this).hide();
//
// });


//////////////////////////////////////////////


///////////////////////////////////////////////
//
// 1) make button show when click on album
// 2) make button got back to albums page

///////////////////////////////////////////////


///////////////////////////////////////////////
// 1) make button show when click on picture
// 2) make button got back to album
});
