// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();
$(document).ready(function(){
	var hash = window.location.hash.slice(1);
	var $navLinks = $(".link-js");
	var $contentBlocks = $(".tabs__item");

	$navLinks.on("click", function(e){
		e.preventDefault();
		window.location.hash = $(this).attr("href");
		//console.log(window.location);
	});

	$(window).on('hashchange', function(){
		hash = window.location.hash.slice(1);
		compareHash()
	});
	
	compareHash()
	function compareHash(){
		if(!hash){
			changeNav("tab1");
			changeContent("tab1");
		}else{
			changeNav(hash);
			changeContent(hash);
		};
	};

	function changeNav(hash){
		$navLinks.removeClass("active");
		$("[href *=" + hash + "]").addClass("active");
	};

	function changeContent(hash){
		$contentBlocks.removeClass("is-visible");
		$("[id *=" + hash + "]").addClass("is-visible");
	};

});
