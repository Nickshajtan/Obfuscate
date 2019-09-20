(function ($) {
/*Menu*/
$(document).ready(function(){
  var menu_selector = "nav"; 
    function onScroll(){
        var scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + " a.active").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }
});
/*scroll*/   
$(document).ready(function () {
	$(document).on("scroll", onScroll);
	$("a[href^='#']").click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
		    scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
	});
});  
/*click*/    
$(document).ready(function(){
    $(".navbar").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-50;
        $('body,html').animate({scrollTop: top}, 2000);
    });
});
/*mobile*/
$(document).ready(function(){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('nav').toggleClass('menu_state_open');
    });
  });
});    
/*Logo*/
if(window.screen.width > 1025){    
$(document).ready(function(){
     $(".logo img").animate({'width':'1200', height: '400'},2500);
});
}
/*Music player*/
$(document).ready(function(){
    var audio = $("audio.player").get(0); 
  $(".audio-helper").on("click","span", function (event) { 
        $('.audio-helper span.active').removeClass('active');
        $('.audio-helper span:hover').addClass('active');
  });   
    $.each($("span"),function (i,el) {
        el.onclick = function() {
            audio.src = $(el).attr("data-src");
        
        }
    });    
     /*Play&Pause*/
        $(".play-pause").on("click",".play",function(event){
           audio.play(); 
           $('.play-pause div').removeClass('play');
           $('.play-pause div').addClass('pause');
           $('.seek').attr('max',audio.duration);
        });
        $(".play-pause").on("click",".pause",function(event){
           audio.pause();
           $('.play-pause div').removeClass('pause');
           $('.play-pause div').addClass('play');
        });
        $(".audio-helper").on("click","li",function(event){
            $('.play-pause div').removeClass('pause');
            $('.play-pause div').addClass('play');
            $('.play-pause span').removeClass('play-pause-icon-pause');
            $('.play-pause span').addClass('play-pause-icon');
            $('.track-name span').css({ color: '#fff' });
            $('.track-name time').css({ color: '#fff' });
            $('progress.seek').css({ display: 'none' });
        });
            /*Player icon*/
        $(".play-pause").on("click",".play", function (event) { 
            $('.play-pause span').removeClass('play-pause-icon');
            $('.play-pause span').addClass('play-pause-icon-pause');
            $('.track-name span').css({ color: '#f60031' });
            $('.track-name time').css({ color: '#f60031' });
            $('progress.seek').css({ display: 'block' });
        });
        $(".play-pause").on("click",".pause", function (event) { 
            $('.play-pause span').removeClass('play-pause-icon-pause');
            $('.play-pause span').addClass('play-pause-icon');
            $('.track-name span').css({ color: '#fff' });
            $('.track-name time').css({ color: '#fff' });
            $('progress.seek').css({ display: 'none' });
        });
            /*Audio duration*/
            audio.addEventListener('loadedmetadata', function() {
            var time = audio.duration;
            $(".seek").attr("max", time);
            var ntime = (Math.floor(time / 60) + ': ' + Math.round(time % 60).toFixed(0));
            $('.track-name time').html(ntime);
            
            /*Audio name*/
            var nam = audio.src;
            var nam1 = nam.split('/')[8];
            var name = nam1.split('.')[0];
            $('.track-name .track-name-span').html(name + '&nbsp;&nbsp;&nbsp;&nbsp;');
            });    
            /*Input scroll*/
            $(".seek").bind("change", function() {
                audio.currentTime = $(this).val();
		        $(".seek").attr("max", audio.duration);
	        });
            audio.addEventListener('timeupdate',function (){   
                curtime = parseInt(audio.currentTime, 10);
		        $(".seek").attr("value", curtime);
	        });
    
});
})(jQuery);

