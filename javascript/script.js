// Twitter Widget
$(".tweet").tweet({
    username: "toam", 
    // Change your Twitter username here
    join_text: "auto",
    avatar_size: 0,
    count: 2,
    template: "{text} {time}",
    auto_join_text_default: "", 
    auto_join_text_ed: "",
    auto_join_text_ing: "",
    auto_join_text_reply: "",
    auto_join_text_url: "",
    loading_text: "Chargement des tweets"
});

 $('.search > .icon-remove').click(function(){
   	$('.search_popup').slideUp('', function() {});
 	$('.search > .icon-search').toggleClass('active');
 	$('.search > .icon-remove').toggleClass('active');
 });

// Mobile menu
 $('.menubutton').click(function(){
   	$('header nav').slideToggle('', function() {});
 });

// Responsive videos
 $(".post_video").fitVids();