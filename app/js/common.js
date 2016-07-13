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

});

$(window).load(function(){
	if(Cookies.get("full_version") == "12345"){
		$("#polnay_stranica").css("display","none");
	} else {
		$("#mobilnay_stranica").css("display","none");
	}
});

$(document).ready(function() {

	$("#polnay_stranica").click(function(){
		Cookies.set('full_version', '12345', {
			expires: 1,
			path: "/",
		});
		location.reload();
	});

	$("#mobilnay_stranica").click(function(){
		Cookies.remove("full_version");
		location.reload();
	});


	$("nav ul").clone([],[true]).appendTo(".mobile_navigation");
	$(".mobile_navigation ul li").removeClass("active_nav");
	$(".regestration").clone().appendTo(".mobile_navigation");

	$(".mobile_navigation ul li").animated("fadeInRight", "fadeOutDown");


	$(".nav_button").click(function() {
		if ($(".mobile_navigation").css("display") == "none") {
			$(".mobile_navigation").show("slow");
		} else {
			$(".mobile_navigation").hide("slow");
		}
		$(".mobile_navigation .regestration").css("display", "block");
	});

	$(".bottom_header a").click(function() {
		$(".bottom_header li").removeClass("active_nav");
		$(this).parent().addClass("active_nav");
	});

	var menu = $('.wrapper div');

	menu.on('click', function() {
  	var menuNum = $(this).data('menu');
  	$(this).toggleClass('menu-'+ menuNum +'-active');
	})

});
