$(document).ready(function() {
 $('.video_popup').magnificPopup({
 type: 'iframe',
 iframe: {
 patterns: {
   youtube: {
     index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
     id: 'v=', // String that splits URL in a two parts, second part should be %id%
     // Or null - full URL will be returned
     // Or a function that should return %id%, for example:
     // id: function(url) { return 'parsed id'; }
     src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0' // Урл, который берется из кода iframe
   }
 }
 }
 });
 
$(".popup_c").magnificPopup({
    type: 'inline',
   	focus: '#api-form-name'
    });
 });