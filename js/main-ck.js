$(window).load(function(){$("#slider").orbit({bullets:!0})});$(document).ready(function(){$("#install_button").click(function(e){e.preventDefault();$("#install_read_more").reveal({animation:"fadeAndPop",animationspeed:300,closeonbackgroundclick:!0,dismissmodalclass:"close-reveal-modal"})});$(".product").mouseenter(function(e){e.preventDefault();$(this).find(".description").addClass("active-description")});$(".product").mouseleave(function(e){e.preventDefault();$(this).find(".description").removeClass("active-description")})});