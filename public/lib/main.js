'use strict';

//on reload bring page view back to top
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};
$('body').css('display', 'none');

//after dom is ready to manipulate
window.onload = function(){
	//fade body in on laod

	$('body').fadeIn(1500);

	//hamburger animation
	$(".navbar-toggler").click(function(){
		var navbarCollapse = $("#navbarSupportedContent");
		if(!navbarCollapse.hasClass("collapsing")){
			$(".menu-btn").toggleClass("open-nav");
		} else if(navbarCollapse.hasClass("collapsings")){
			$(".menu-btn").toggleClass("open-nav");
		}
	});
	//image lazy load
	var bLazy = new Blazy({
		offset: 150,
		success: function(e){
			$(".jumbotron").css("background-image", 'linear-gradient(to bottom, transparent, rgba(0,0,0,.8)), url("/images/office.jpg")');
		}
	});

	var navbar = document.querySelector(".navbar"),
			jumbotron = document.querySelector(".jumbotron"),
			navbarHeight = getComputedStyle(navbar).height.split('px')[0],
			jumboHeight = getComputedStyle(jumbotron).height.split('px')[0],
			windowWidth = document.documentElement.clientWidth,
			offsetVal = jumboHeight - (navbarHeight);

	function uiChange(){
		navbar.classList.add("nav-bg");
		$(".logo").css("color","#F7F5E6");
		$(".logo").css("border","2px solid #F7F5E6");
		$(".navbar-inverse .navbar-nav .nav-link").css("color","#F7F5E6");
		$(".navbar-inverse .navbar-nav .nav-link").hover(function(){
			$(this).css("color","rgba(247, 245, 230,.75)");
		},function(){
			$(this).css("color","#F7F5E6");
		});
	};

	function uiReset(){
		navbar.classList.remove("nav-bg");
		$(".logo").css("color","white");
		$(".logo").css("border","2px solid white");
		$(".navbar-inverse .navbar-nav .nav-link").css("color","white");
		$(".navbar-inverse .navbar-nav .nav-link").hover(function(){
			$(this).css("color","rgba(255, 255, 255,.75)");
		},function(){
			$(this).css("color","white");
		});
	};

	if(windowWidth < 768){
		// if page loads as mobile add primary color;
		uiChange();
	};

	window.onresize = function(){
		//check screen size, if mobile, add primary color, if screen size changes to a large enough px count, fadeout navbar execute as normal
		var windowWidth = document.documentElement.clientWidth,
				jumboHeight = getComputedStyle(jumbotron).height.split('px')[0],
				offsetVal = jumboHeight - (navbarHeight),
				scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

		if(windowWidth < 768){
			uiChange();
		} else if(scrollTop <= offsetVal && windowWidth > 768) {
			uiReset();
		}
	};

	function navChange(){
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
				windowWidth = document.documentElement.clientWidth,//check to see if user is mobile, disable navbar fadein
				aboutHeight = $(".about .section-title").offset().top - 85,//.about margin
				skillsHeight = $(".skills .skill-title").offset().top - 85,
				portfHeight = $(".portfolio .portf-title").offset().top - 85,
				contactHeight = $(".contact .contact-title").offset().top - 85;

		if($(".navbar").hasClass("nav-bg")){
			if( scrollTop > aboutHeight){
				$("#about-nav").addClass("active");
			} else {
				$("#about-nav").removeClass("active");
			};
			if(scrollTop > skillsHeight){
				$(".nav-link").removeClass("active");
				$("#skills-nav").addClass("active");
			} else{
				$("#skills-nav").removeClass("active");
			};
			if(scrollTop > portfHeight){
				$(".nav-link").removeClass("active");
				$("#portf-nav").addClass("active");
			} else{
				$("#portf-nav").removeClass("active");
			};
			if(scrollTop > contactHeight){
				$(".nav-link").removeClass("active");
				$("#contact-nav").addClass("active");
			} else{
				$("#contact-nav").removeClass("active");
			};
		}
		if (scrollTop >= 75 && windowWidth > 768) {
			uiChange();
		} else if(windowWidth > 768){
		  uiReset();
		}
	};

	window.addEventListener('scroll', navChange, false);// will only fire if screen size is 991 px or larger(larger than possible mobile devices)

	//typing effect on hero message
	var typed = new Typed("#hero-message span", {
		strings: ["I'm a web developer.", "I'm self-taught.", "I'm available for hire."],
		typeSpeed: 90,
		backSpeed: 50,
		backDelay: 1000,
		smartBackspace: true,
		loop: true,
		loopCount: false
	});

	$(".learn-scroll").on("click", function(){
		var div = $("#about"),
				pos = div.offset().top - 65;

		$('html, body').animate({scrollTop:pos},1500);
	});

	$(".navbar-brand").on("click", function(){
		var navTo = $("#hero"),
				pos = navTo.offset().top;

		$('html, body').animate({scrollTop:pos},1500);
	});

	$(".nav-link").on("click", function(){
		var navVal = $(this).text().toLowerCase(),
				navDiv = $("#" + navVal),
				pos;

		if (navVal === "about"){
			pos =  navDiv.offset().top -65;
		} else {
			pos =	navDiv.offset().top -35;
		}

		$('html, body').animate({scrollTop:pos},1500);
	});

	$("#form-btn").on("click", function(){
		var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
		$("#myForm").css("width", "100%");
		$(".sticky-top").css("z-index", "0");
		setTimeout(function(){
			$(".form-wrapper .form-close-btn").css("visibility", "visible");
		},400);
		if ($(document).height() > $(window).height()) {
    	$('html').addClass('no-scroll').css('top',-scrollTop);
		};
	});

	$(".form-close-btn").on("click", function(){
		var scrollTop = parseInt($('html').css('top'));
		$(".form-wrapper .form-close-btn").css("visibility", "hidden");
		$("#myForm").css("width", "0%");
		$('html').removeClass('no-scroll');
		$('html,body').scrollTop(-scrollTop);
		$(".sticky-top").css("z-index","1030");
	});

	$(".card-flip").on("click", function() {
		var card = $(this).closest(".card-container");
		console.log(card);
		if(card.hasClass("hover")){
			card.removeClass("hover");
		} else {
			card.addClass("hover");
		}
	});

};


