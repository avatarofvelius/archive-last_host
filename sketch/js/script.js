$(document).ready(function(){
  $('nav a').on('click', function(){
   
   $('nav li.current').removeClass('current');
   $(this).parent().addClass('current');
   
   $('h1#heading').text($(this).text());
   
   
   // category can only handle 1 space at the moment!
   var category = $(this).text().toLowerCase().replace(' ', '-');
   
   if(category == 'all-projects'){
	   $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
   } else {
	   $('ul#gallery li').each(function(){
		   if(!$(this).hasClass(category)){
			   $(this).hide().addClass('hidden');
		   } else {
			   $(this).fadeIn('slow').removeClass('hidden');
		   }
	   })
   }
   return false;
	});
	
	
	$('ul#gallery li').on('mouseenter', function(){	
		var title = $(this).children().data('title');
		var story = $(this).children().data('story');
		var desc = $(this).children().data('desc');
		
		if(title == null){
			title = '&nbsp;';
		}
		
		if(story == null){
			story = '&nbsp;';
		}
		
		if (desc == null){
			desc = 'Click to Enlarge';
		}
		
		$(this).append('<div class="overlay"></div>');
		
		var overlay = $(this).children('.overlay');
		
		overlay.html('<h3>'+title+'</h3><p>'+story+'</p><p>'+desc+'</p><p>');
		
		overlay.fadeIn(800)		
	});
	
	$('ul#gallery li').on('mouseleave', function(){
		$(this).append('<div class="overlay"></div>');
		
		var overlay = $(this).children('.overlay');
		
		overlay.fadeOut(400);
		
	});
	
	
});