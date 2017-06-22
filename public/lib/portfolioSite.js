'use strict'

window.onload = function(){

	var navbar = document.querySelector(".navbar"),
			jumbotron = document.querySelector(".jumbotron"),
			navbarHeight = getComputedStyle(navbar).height.split('px')[0],
			jumboHeight = getComputedStyle(jumbotron).height.split('px')[0],
			windowWidth = document.documentElement.clientWidth,
			offsetVal = jumboHeight - (navbarHeight);

	function uiChange(){
		navbar.classList.add("nav-bg")
		$("#logo").css("color","#F7F5E6");
		$("#logo").css("border","2px solid #F7F5E6");
		$(".navbar-inverse .navbar-nav .nav-link").css("color","#F7F5E6");
		$(".navbar-inverse .navbar-nav .nav-link").hover(function(){
			$(this).css("color","rgba(247, 245, 230,.75)");
		},function(){
			$(this).css("color","#F7F5E6");
		})
	};
	function uiReset(){
		navbar.classList.remove("nav-bg")
		$("#logo").css("color","white");
		$("#logo").css("border","2px solid white");
		$(".navbar-inverse .navbar-nav .nav-link").css("color","white");
		$(".navbar-inverse .navbar-nav .nav-link").hover(function(){
			$(this).css("color","rgba(255, 255, 255,.75)");
		},function(){
			$(this).css("color","white");
		})
	};
	if(windowWidth < 768){	// if page loads as mobile add primary color;
		uiChange();
	};

	window.onresize = function(){	//check screen size, if mobile, add primary color, if screen size changes to a large enough px count, fadeout navbar execute as normal
		var windowWidth = document.documentElement.clientWidth,
		jumboHeight = getComputedStyle(jumbotron).height.split('px')[0];
		offsetVal = jumboHeight - (navbarHeight);
		var scrollTop = document.body.scrollTop;
		console.log(windowWidth);
		if(windowWidth < 768){
			uiChange();
		} else if(scrollTop <= offsetVal && windowWidth > 768) {
			uiReset()
		}
	};

	function navChange(){
		var scrollTop = document.body.scrollTop,
		windowWidth = document.documentElement.clientWidth;//check to see if user is mobile, disable navbar fadein

		if (scrollTop >= offsetVal && windowWidth > 768) {
			uiChange();
		} else if(windowWidth > 768){
		    uiReset();
		}
	};

	window.addEventListener('scroll', navChange, false);// will only fire if screen size is 991 px or larger(larger than possible mobile devices)

		function textChange(){
			$("#hero-message").html("      ");
			$("#hero-message").css("background","none");
			$("#hero-message").css("color","white");
		};

//hero message function, text change
	setInterval(function interval(){
		var heroMessage = $("#hero-message");
		var heroMsg = heroMessage.html();
		setInterval(function(){
			heroMessage.css("border-right", "solid 1px white");
			setTimeout(function(){
				heroMessage.css("border-right", "0px");
			}, 750)
		},1250)
		setTimeout(function(){
			heroMessage.css("background-color","rgba(82, 101, 143,.7)");
			heroMessage.css("color","black");
			setTimeout(function(){
				textChange();
				setTimeout(function(){
					if(heroMsg === "a web developer."){
						heroMessage.html("a student.");
					} else if (heroMsg === "a student."){
						heroMessage.html("self taught.");
					} else {
						heroMessage.html("a web developer.");
					}
				},500)
			},750)
		},1000)

	},2500)
//scroll effect 1
	$(".learn-scroll").on("click", function(){
		var div = $("#about");
		var pos = div.offset().top;

		$('html, body').animate({scrollTop:pos},1500);
	})

	$(".contact-msg .form-btn").on("click", function(){
		var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
		$("#myForm").css("width", "100%");
		$(".sticky-top").css("z-index", "0");
		if ($(document).height() > $(window).height()) {
    	$('html').addClass('no-scroll').css('top',-scrollTop);
		};
	});

	$(".form-close-btn").on("click", function(){
		var scrollTop = parseInt($('html').css('top'));
		$("#myForm").css("width", "0%");
		$('html').removeClass('no-scroll');
		$('html,body').scrollTop(-scrollTop);
		$(".sticky-top").css("z-index","1030");
	});
}
