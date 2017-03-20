// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();
$(document).ready(function(){
	var hash = window.location.hash.slice(1);
	var navLinks = $(".link-js");
	var contentBlocks = $(".tabs__item");
	console.log(hash);
	$(window).on('hashchange', function(){
		hash = window.location.hash.slice(1);
		if(!hash){
			toggleNav("tab1");
			toggleContent("tab1");
		}else{
			toggleNav(hash);
			toggleContent(hash);
		};
	});
	
	if(!hash){
		toggleNav("tab1");
		toggleContent("tab1");
	}else{
		toggleNav(hash);
		toggleContent(hash);
	};

	function toggleNav(hash){
		navLinks.removeClass("active").each(function(){
			var href = $(this).attr("href").slice(1);
			if(href == hash) $(this).addClass("active");
		});
	};

	function toggleContent(hash){
		contentBlocks.removeClass("is-visible").each(function(){
			var tabId = $(this).attr("id");
			if(tabId == hash) $(this).addClass("is-visible");
		});
	};


});
