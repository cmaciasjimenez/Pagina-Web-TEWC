$(document).ready(function(){
        
	/* carga cuando hagamos click */
	$('#sec-home').click(function(){
		$('#content').load('content.html');
	});
	$('#sec-blog').click(function(){
		$('#content').load('en-preparacion.html');
	});
	$('#sec-photos').click(function(){
		$('#content').load('en-preparacion.html');
	});
	$('#sec-about').click(function(){
		$('#content').load('en-preparacion.html');
	});
	$('#sec-links').click(function(){
		$('#content').load('en-preparacion.html');
	});
	
});

$(document).ready(function(){
     /* Color changer de http://www.marcofolio.net/webdesign/create_a_better_jquery_stylesheet_switcher.html
     Añadida la propiedad title para que cambie sólo éste css
     si hay varias páginas ponemos cookies como aquí 
     http://www.cssnewbie.com/simple-jquery-stylesheet-switcher/
     */
   if ($.cookie("colordark")) {
      $('link[title="change"]').attr("href", $.cookie("colorchanger"));
   }
   $(".colordark").click(function(){
      $('link[title="change"]').attr("href", "css/dark.css");
      $.cookie("colorchanger","css/dark.css", {expires: 365, path: '/'});
      $('.post').corner();
      return false;
   });
   
   $(".coloralternative").click(function(){
      $('link[title="change"]').attr("href", "css/alternative.css");
      $.cookie("colorchanger","css/alternative.css", {expires: 365, path: '/'});
      $('.post').uncorner();
      return false;
   });

});
$(document).ready(function(){
   $('.post').livequery(function() {
   	if ($.cookie("colorchanger") == "css/dark.css") {	
		$('.post').corner();
	} else {
		$('.post').uncorner();
	}
	return false;
   });		
});