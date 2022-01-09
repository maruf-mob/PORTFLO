$(document).ready(function(){
    
    //owq carousel;
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
        autoplay:true,
    });

    //gallery nav li click;
    $('.portfolio-main .navigation .port-details ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active'); 
     });
     
    //mixtup;
    var mixer = mixitup('.gallery');

    //gallery pop-up using venoBox;
    
    new VenoBox({
        selector:'.link',
        spinner:'flow',
        spinColor:'#d6c6b2',
     });
    
    //slick;
    $('.testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows:true,
        prevArrow:'<i class="fas fa-long-arrow-alt-left left-arrow"></i>',
        nextArrow:'<i class="fas fa-long-arrow-alt-right next-arrow"></i>',
      });
    //wow js;
    new WOW().init();
});