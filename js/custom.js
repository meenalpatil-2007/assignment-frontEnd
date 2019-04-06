$(function() {
  $('.click').click(function(l){
    // prevent default action
    l.preventDefault();
    scrollToElement( $(this).attr('href'), 2000 );
  });

  var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 1000;
    $('html,body').animate({
      scrollTop: $(el).offset().top
    }, speed);
  }
  
  $.get('http://www.randomtext.me/api/lorem/p-5/40-65', function( data ) {
    $( ".description" ).html( data.text_out );
  });
  
  $('.desc').each(function( i, el ) {
    $.get('http://www.randomtext.me/api/lorem/p-1/25-35', function( data ) {
      console.log(data.text_out);
      $(el).html(data.text_out);
    });
  });
});