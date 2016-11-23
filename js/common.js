$(document).ready(function() {

	

	$.stellar({
		responsive: true,
		horizontalOffset: 0,
	
		
	}
	);
	$(".owl-carousel").owlCarousel({
						loop: true,
						responsive:{
				        0:{
				        	items:1,
				            nav : true,
				           
				            
				        }},
				        navText: "",
				       
	});
	var h = $(".s_faq").height();
	$(".faq_item_toggle").click(function() {
			var g=$(this).parent().parent().parent().children(".item_content").height();
			
		if($(this).parent().parent().parent().children(".item_content").is(":visible")){
			$(this).parent().parent().parent().children(".item_content").slideUp();
			$(this).parent().children(".item_wrap_af").slideUp();
			$(".s_faq_wrap").removeClass("active");
			if($(window).width()>769){
				$(".s_faq").css("min-height",h);
				$(".s_faq .s_faq_bg").css("border-bottom-width", $(".s_faq").height()+20);
	  		}	
		}
		else{
			$(".item_content, .item_wrap_af").hide();
			$(".s_faq_wrap").removeClass("active");
			$(this).parent().addClass("active");
			$(this).parent().parent().parent().children(".item_content").slideDown();
			$(this).parent().children(".item_wrap_af").slideDown();
			if($(window).width()>769){
				$(".s_faq").css("min-height",h+g+100);
				$(".s_faq .s_faq_bg").css("border-bottom-width", $(".s_faq").height()+20);
			}
		}
	});
	

	function wResize(){
		/*$(".item_content").css("width", $(".s_faq .container").width())*/
		$(".s_feedback_bg").css("border-right-width", $(".s_feedback").width());
		$(".s_feedback_bg").css("border-bottom-width", $(".s_feedback").height()+20);
		$(".main_header .bg").css("border-left-width", $("header").width());
		$(".main_header .bg").css("border-bottom-width", $("header").height());
		$(".s_faq .s_faq_bg").css("border-left-width", $(".s_faq").width());
		$(".s_faq .s_faq_bg").css("border-bottom-width", $(".s_faq").height()+20);
		
		/*$("header").css("min-height", $(window).height()+5)
		$(".s_feedback").css("min-height", $(window).height()+5)*/		
	};
	wResize();
});
$(window).resize(function(){
	function wResize(){
		/*$(".item_content").css("width", $(".s_faq .container").width())*/
		$(".s_feedback_bg").css("border-right-width", $(".s_feedback").width());
		$(".s_feedback_bg").css("border-bottom-width", $(".s_feedback").height()+20);
		$(".main_header .bg").css("border-left-width", $("header").width());
		$(".main_header .bg").css("border-bottom-width", $("header").height());
		$(".s_faq .s_faq_bg").css("border-left-width", $(".s_faq").width());
		$(".s_faq .s_faq_bg").css("border-bottom-width", $(".s_faq").height()+20);

		/*$("header").css("min-height", $(window).height()+5)
		$(".s_feedback").css("min-height", $(window).height()+5)*/	
		};
	wResize()
});
$(function() {







	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
