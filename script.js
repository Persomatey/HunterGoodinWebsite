 
 var icon= document.querySelector(" nav i"); 
 var mainNav= document.querySelector(" .nav2")
 var nav= document.getElementById("nav3");

 icon.addEventListener("click", function(){ 
    mainNav.classList.toggle("navtoggle");      
 });

 window.addEventListener("scroll", function(){
 	if(window.pageYOffset > nav.offsetTop){
 	nav.classList.add("nav1");
     } else {
     	nav.classList.remove("nav1");
     }
 });
