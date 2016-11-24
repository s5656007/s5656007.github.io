$(document).ready(function() {

	$('.phone').mask('71111111111'); 

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

(function($) {
	var pasteEventName = 'input' + ".mask";
	var iPhone = (window.orientation != undefined);

	$.mask = {
		//Predefined character definitions
		definitions: {
		      
			'1': "[0-9]",
			'a': "[A-Za-z]",
			'*': "[A-Za-z0-9]"
		}
	};

	$.fn.extend({
		//Helper Function for Caret positioning
		caret: function(begin, end) {
			if (this.length == 0) return;
			if (typeof begin == 'number') {
				end = (typeof end == 'number') ? end : begin;
				return this.each(function() {
					if (this.setSelectionRange) {
						this.focus();
						this.setSelectionRange(begin, end);
					} else if (this.createTextRange) {
						var range = this.createTextRange();
						range.collapse(true);
						range.moveEnd('character', end);
						range.moveStart('character', begin);
						range.select();
					}
				});
			} else {
				if (this[0].setSelectionRange) {
					begin = this[0].selectionStart;
					end = this[0].selectionEnd;
				} else if (document.selection && document.selection.createRange) {
					var range = document.selection.createRange();
					begin = 0 - range.duplicate().moveStart('character', -100000);
					end = begin + range.text.length;
				}
				return { begin: begin, end: end };
			}
		},
		unmask: function() { return this.trigger("unmask"); },
		mask: function(mask, settings) {
			if (!mask && this.length > 0) {
				var input = $(this[0]);
				var tests = input.data("tests");
				return $.map(input.data("buffer"), function(c, i) {
					return tests[i] ? c : null;
				}).join('');
			}
			settings = $.extend({
				placeholder: "_",
				completed: null
			}, settings);

			var defs = $.mask.definitions;
			var tests = [];
			var partialPosition = mask.length;
			var firstNonMaskPos = null;
			var len = mask.length;

			$.each(mask.split(""), function(i, c) {
				if (c == '?') {
					len--;
					partialPosition = i;
				} else if (defs[c]) {
					tests.push(new RegExp(defs[c]));
					if(firstNonMaskPos==null)
						firstNonMaskPos =  tests.length - 1;
				} else {
					tests.push(null);
				}
			});

			return this.each(function() {
				var input = $(this);
				var buffer = $.map(mask.split(""), function(c, i) { if (c != '?') return defs[c] ? settings.placeholder : c });
				var ignore = false;  			//Variable for ignoring control keys
				var focusText = input.val();

				input.data("buffer", buffer).data("tests", tests);

				function seekNext(pos) {
					while (++pos <= len && !tests[pos]);
					return pos;
				};

				function shiftL(pos) {
					while (!tests[pos] && --pos >= 0);
					for (var i = pos; i < len; i++) {
						if (tests[i]) {
							buffer[i] = settings.placeholder;
							var j = seekNext(i);
							if (j < len && tests[i].test(buffer[j])) {
								buffer[i] = buffer[j];
							} else
								break;
						}
					}
					writeBuffer();
					input.caret(Math.max(firstNonMaskPos, pos));
				};

				function shiftR(pos) {
					for (var i = pos, c = settings.placeholder; i < len; i++) {
						if (tests[i]) {
							var j = seekNext(i);
							var t = buffer[i];
							buffer[i] = c;
							if (j < len && tests[j].test(t))
								c = t;
							else
								break;
						}
					}
				};

				function keydownEvent(e) {
					var pos = $(this).caret();
					var k = e.keyCode;
					ignore = (k < 16 || (k > 16 && k < 32) || (k > 32 && k < 41));

					//delete selection before proceeding
					if ((pos.begin - pos.end) != 0 && (!ignore || k == 8 || k == 46))
						clearBuffer(pos.begin, pos.end);

					//backspace, delete, and escape get special treatment
					if (k == 8 || k == 46 || (iPhone && k == 127)) {//backspace/delete
						shiftL(pos.begin + (k == 46 ? 0 : -1));
						return false;
					} else if (k == 27) {//escape
						input.val(focusText);
						input.caret(0, checkVal());
						return false;
					}
				};

				function keypressEvent(e) {
					if (ignore) {
						ignore = false;
						//Fixes Mac FF bug on backspace
						return (e.keyCode == 8) ? false : null;
					}
					e = e || window.event;
					var k = e.charCode || e.keyCode || e.which;
					var pos = $(this).caret();

					if (e.ctrlKey || e.altKey || e.metaKey) {//Ignore
						return true;
					} else if ((k >= 32 && k <= 125) || k > 186) {//typeable characters
						var p = seekNext(pos.begin - 1);
						if (p < len) {
							var c = String.fromCharCode(k);
							if (tests[p].test(c)) {
								shiftR(p);
								buffer[p] = c;
								writeBuffer();
								var next = seekNext(p);
								$(this).caret(next);
								if (settings.completed && next == len)
									settings.completed.call(input);
							}
						}
					}
					return false;
				};

				function clearBuffer(start, end) {
					for (var i = start; i < end && i < len; i++) {
						if (tests[i])
							buffer[i] = settings.placeholder;
					}
				};

				function writeBuffer() { return input.val(buffer.join('')).val(); };

				function checkVal(allow) {
					//try to place characters where they belong
					var test = input.val();
					var lastMatch = -1;
					for (var i = 0, pos = 0; i < len; i++) {
						if (tests[i]) {
							buffer[i] = settings.placeholder;
							while (pos++ < test.length) {
								var c = test.charAt(pos - 1);
								if (tests[i].test(c)) {
									buffer[i] = c;
									lastMatch = i;
									break;
								}
							}
							if (pos > test.length)
								break;
						} else if (buffer[i] == test[pos] && i!=partialPosition) {
							pos++;
							lastMatch = i;
						} 
					}
					if (!allow && lastMatch + 1 < partialPosition) {
						input.val("");
						clearBuffer(0, len);
					} else if (allow || lastMatch + 1 >= partialPosition) {
						writeBuffer();
						if (!allow) input.val(input.val().substring(0, lastMatch + 1));
					}
					return (partialPosition ? i : firstNonMaskPos);
				};

				if (!input.attr("readonly"))
					input
					.one("unmask", function() {
						input
							.unbind(".mask")
							.removeData("buffer")
							.removeData("tests");
					})
					.bind("focus.mask", function() {
						focusText = input.val();
						var pos = checkVal();
						writeBuffer();
						setTimeout(function() {
							if (pos == mask.length)
								input.caret(0, pos);
							else
								input.caret(pos);
						}, 0);
					})
					.bind("blur.mask", function() {
						checkVal();
						if (input.val() != focusText)
							input.change();
					})
					.bind("keydown.mask", keydownEvent)
					.bind("keypress.mask", keypressEvent)
					.bind(pasteEventName, function() {
						setTimeout(function() { input.caret(checkVal(true)); }, 0);
					});

				checkVal(); //Perform initial check for existing values
			});
		}
	});
})(jQuery);
function formApiAddNewOrder(form_id) {
    var items = $("#api-form-items-form-"+form_id).serialize(); // заказанные товары
    var name = $("#api-form-name-"+form_id).val();  // имя 
    var phone = $("#api-form-phone-"+form_id).val();    // телефон
    var comment = $("#api-form-comment-"+form_id).val();
    var data = 'form_id='+form_id+'&name='+name+'&phone='+phone+'&comment='+comment+'&'+items;
    
    $.ajax({
        url: 'http://rusdropshipping.ru/api/api-form.php?action=add_new_order',
        type: 'POST',    
        data: data,
        success: function(response) {
            var result = jQuery.parseJSON(response);
            // удаляем все отметки об ошибках
            $(".my-error-class").html('');
            if(result.status == 'success') {
                $("#api-form-body-block-"+form_id).html('<div id="generating-result-alert" class="alert alert-success"><h4>'+result.message+'</h4></div>');        
            }
            else if(result.status == 'error') {
                $(result.errors).each(function(key, value){
                    $("#api-form-"+value.type+"-error-"+form_id).html(value.text);    
                });
            } 
            else if(result.status == 'failed') {
                $("#api-form-message-block-"+form_id).html('<div id="generating-result-alert" class="alert alert-danger">'+result.message+'</div>')    
                setTimeout(function(){
                    $("#generating-result-alert").remove();
                }, 1000);
            }           
        }
    }); 
}





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
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
