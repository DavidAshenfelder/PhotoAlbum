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
$(".album-wrapper").hide();


///////////////////////////////////////////////

$("#albums-main").children().click(function(event){
  event.preventDefault();
  $(".buttons").fadeIn("medium");
  $("#front-page").hide();
  var albClick = $(this).attr('rel')
  console.log(albClick);
  var showArr =  $('.album-wrapper').filter(function(idx, obj) {

    return $(obj).children('.album').attr('id') === albClick;

  });

  $(showArr).show()

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
  var albVal = $('.album-wrapper').filter(function(idx,elm) {
     return $(elm).children('.album').attr('id') === butVal
 });

  $('.album-wrapper').hide()
  $(albVal).show();

});

///////////////////////////////////////////////


//////////////////////////////////////////////


$('.album img').click(function(event){
  event.preventDefault();
  var imgClone = $(this).clone();
  $('.overLay').prepend(imgClone);
  $('.overLay').show();
  $('.row input').show();





})

$('#goBack').click(function(){
  $('.overLay').hide();
  $('.overLay img').remove();

});

//////////////////////////////////////////////


///////////////////////////////////////////////

$('#albumGoBack').click(function(){
  $('#front-page').show();
  $('.buttons').hide();
  $('.album-wrapper').hide();

});

});
