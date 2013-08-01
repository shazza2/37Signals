
$(document).ready(function(){
	
	var arrow = 'arrow';


	 function mouseEnter(){
		$('.banner').hide();
		var id = $(this).attr (arrow); // Using a data attribute to get the id information
		$('#'+id).show(); // jQuery Selector
		var banner=$(this).attr('banner-alt');
		$('.'+ banner).show();
	}
	
	function mouseLeave(){
		var banner= $(this).attr('banner-alt');
		$('.'+ banner).hide();
		var id = $(this).attr(arrow);
		$('#'+id).hide();
		$('.banner').show();
		}

		$('.box').on('mouseenter',mouseEnter)
		$('.box').on('mouseleave', mouseLeave)
		
	
});
		
