$(document).ready(function(){
$("#box").scroll(function(){
console.log("you are scrolling");
});
$(window).resize(function(){
    console.log("you are resizing");
    });
});