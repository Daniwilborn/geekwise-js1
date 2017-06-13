/* ****CHALLENGE

Target the figure

Target the figcaption and display:none; by default

on figure mouseenter, after 500ms figcaption display:block;

visibility: hidden & visibility: visible;

opacity:0; Y opacity:1;

if mouseleave before 500ms, clear the timeout.

If you get this done, take it to a nav example */
var figure = document.querySelector('figure');

var timer;

for(let figcaption of figure){
  figure.addEventListener('mouseenter', function(evt){
    timer = setTimeout(function (){getFc(evt);}, 500);
    })
  figure.addEventListener('mouseleave', function(evt){
    clearTimeout(timer);
  });
}
