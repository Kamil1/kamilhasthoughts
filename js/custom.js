/*
** Minimized header when user click's exit
*/

$('#banner-exit').click(function() {
	$('div header').addClass("sticky");
    $('header img#kamil').addClass("minimize-left");
    $('header img#menu').addClass("minimize-right");
    $('header img#banner-twitter').addClass("disappear");
    $('header img#banner-github').addClass("disappear");
    $('header img#banner-facebook').addClass("disappear");
    $('header img#banner-exit').addClass("disappear");
    $('header h3#banner-twitterhandle').addClass("disappear-text");
    $('header h3#banner-facebookname').addClass("disappear-text");
    $('header h3#banner-githubname').addClass("disappear-text");
});

$('#menu').click(function() {
	$('div header').removeClass("sticky");
    $('header img#kamil').removeClass("minimize-left");
    $('header img#menu').removeClass("minimize-right");
    $('header img#banner-twitter').removeClass("disappear");
    $('header img#banner-github').removeClass("disappear");
    $('header img#banner-facebook').removeClass("disappear");
    $('header img#banner-exit').removeClass("disappear");
    $('header h3#banner-twitterhandle').removeClass("disappear-text");
    $('header h3#banner-facebookname').removeClass("disappear-text");
    $('header h3#banner-githubname').removeClass("disappear-text");
});