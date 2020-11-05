$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
                console.log("OK");
            } else {
                $('.nav').removeClass('affix');
            }
        });

        const navSlide = () =>{
	const burger = document.querySelector('.burger');
	const nav =document.querySelector('.nav-links');
	const navLinks=document.querySelectorAll('.nav-links li')


	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
			//animate links
		navLinks.forEach((link,index) => {
      if(link.style.animation){
      	link.style.animation='';
      }else{
      	link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
       }
	 });

		//burger animation
		burger.classList.toggle('toggle');
	});


}
navSlide();
