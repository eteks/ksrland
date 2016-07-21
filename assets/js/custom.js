(function($) {
// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	});
		
	//  Contact Form Validation

	$("#contact_name,#contact_subject,#contact_message").keypress(function (e) {
	 	if (e.which != 8 && e.which != 0 && (e.which < 97 || e.which > 122) && (e.which < 65 || e.which > 90) ) {
		   return false;;
		}
	});
	$('#contact_us_form').submit(function(){
		var required_form_fields = ["contact_name","contact_email","contact_subject","contact_message"];
		var contact_email=jQuery('#contact_email');
		for(i=0;i<required_form_fields.length;i++) {
			var input = jQuery('#'+required_form_fields[i]);
			if(input.val()=='') {
				input.addClass('empty_error');
			}
			else {
				input.removeClass('empty_error');
			}
		}
		if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(contact_email.val())) {
		 	contact_email.addClass("email_error");
	  	}
	  	else{
	  		contact_email.removeClass("email_error");
	  	}

		if(jQuery(':input').hasClass('empty_error')) {
			$('.empty_error_msg').slideDown();
			$('.email_error_msg').css('display','none');
			return false;
		}
		else if(jQuery(':input').hasClass('email_error')) {
			$('.email_error_msg').slideDown();
			$('.empty_error_msg').css('display','none');
			return false;
		}
		else {
			$('.email_error_msg').css('display','none');
			$('.empty_error_msg').css('display','none');
			return true;
		}
	});
	$('.email_sent').slideDown();
	$('.email_sent').delay(2000).slideUp();
	$('.email_not_sent').slideDown();
	$('.email_not_sent').delay(2000).slideUp();
})(jQuery);