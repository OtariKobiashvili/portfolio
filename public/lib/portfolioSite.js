'use strict'

window.onload = function(){

	var navbar = document.querySelector(".navbar"),
			jumbotron = document.querySelector(".jumbotron"),
			navbarHeight = getComputedStyle(navbar).height.split('px')[0],
			jumboHeight = getComputedStyle(jumbotron).height.split('px')[0],
			windowWidth = document.documentElement.clientWidth,
			offsetVal = jumboHeight - (navbarHeight / 2);

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
		offsetVal = jumboHeight - (navbarHeight / 2);
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

	setInterval(function interval(){

		var heroMessage = $("#hero-message");
		var heroMsg = heroMessage.html();
		setTimeout(function(){
			heroMessage.css("background-color","rgba(82, 101, 143,.7)");
			heroMessage.css("color","black");
			setTimeout(function(){
				textChange();
				setTimeout(function(){
					if(heroMsg === "a web developer."){
						heroMessage.html("a student.")
					} else if (heroMsg === "a student."){
						heroMessage.html("self taught.");
					} else {
						heroMessage.html("a web developer.");
					}
				},500)
			},1000)
		},1500)

	},2500)
}
