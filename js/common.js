$(document).ready(function() {

	
	if($(window).width()>600){
	$.stellar({
		responsive: true,
		horizontalOffset: 0,
	
		
	}
	);}
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
			$(".faq_item_toggle").removeClass("active");
			if($(window).width()>769){
				$(".s_faq").css("min-height",h);
				$(".s_faq .s_faq_bg").css("border-bottom-width", $(".s_faq").height()+20);
	  		}	
		}
		else{
			$(".item_content, .item_wrap_af").hide();
			$(".s_faq_wrap").removeClass("active");
			$(".faq_item_toggle").removeClass("active");
			$(this).parent().addClass("active");
			$(this).addClass("active");
			$(this).parent().parent().parent().children(".item_content").slideDown();
			$(this).parent().children(".item_wrap_af").slideDown();
			if($(window).width()>769){
				$(".s_faq").css("min-height",h+g+100);
				$(".s_faq .s_faq_bg").css("border-bottom-width", $(".s_faq").height()+20);
			}
		}
	});
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

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

	/*
	$("form").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "mail.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отпрвлено!");
                   setTimeout(function() {
					var magnificPopup = $.magnificPopup.instance; 
					magnificPopup.close(); 
					ths.trigger("reset")}, 1000);
            }
    });
        });*/

	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
					var magnificPopup = $.magnificPopup.instance; 
					magnificPopup.close(); 
					ths.trigger("reset");


			}, 100);
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
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(window).load(function() {
	$(".sk-cube-grid").delay(100).fadeOut();
	$(".loader").delay(400).fadeOut()
	$(".main_header .h_logo").animated("fadeInDown", "fadeOut");
	$(".main_header .callback").animated("fadeInRight", "fadeOut");
	$(".main_header .header_box").animated("fadeInUpBig", "fadeOut");
	$(".s_facemask .facemask").animated("slideInUp", "fadeOut");
	$(".s_facemask .faceresult").animated("slideInUp", "fadeOut");
	$(".f_item_1, .f_item_2, .f_item_3").animated("zoomIn", "fadeOut");
	$(".s_facemask  .f_buy").animated("fadeInUp", "fadeOut");
	$(".s_reasons .h_reasons .h2, .s_reasons .h_reasons .h2_2, .s_reasons .h_reasons h2").animated("slideInUp", "fadeOut");
	$(".s_reasons .s_reasons_img img").animated("fadeInUpBig", "fadeOut");
	$(".s_reasons .r_item").animated("fadeInRight", "fadeOut");
	$(".s_reasons .reas_button").animated("fadeInUp", "fadeOut");
	$(".s_video h2").animated("fadeInUp", "fadeOut");
	$(".s_video_items a img").animated("flipInY", "fadeOut");
	$(".s_feedback .box_s_feedback").animated("bounceInUp", "fadeOut");
	$(".s_sale .box_s_sale").animated("bounceInLeft", "fadeOut");
	$(".s_sale .sale_img_wrap img").animated("bounceInRight", "fadeOut");
	$(".s_works h2").animated("fadeInUp", "fadeOut");
	$(".s_works_item").animated("bounceInUp", "fadeOut");
	$(".s_works h3, .s_works h3").animated("fadeInUp", "fadeOut");
	$(".s_faq h2").animated("bounceInUp", "fadeOut");
	/*$(".s_faq .s_faq_item").animated("fadeIn", "fadeOut");*/
	$(".last_sale h2").animated("bounceInUp", "fadeOut");
	$(".last_sale_img img").animated("fadeInLeftBig", "fadeOut");
	$(".last-sale_box").animated("fadeInUpBig", "fadeOut");
	$(".last_sale .right_img img").animated("fadeInRightBig", "fadeOut");
	$("footer .footer_logo h2").animated("fadeInUp", "fadeOut");
	$("footer .footer_callback .wrapper").animated("fadeInRight", "fadeOut");






});