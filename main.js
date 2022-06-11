const show = () => {
    $('#adMenu').css({'top': '0%'});
}

const itClose = () => {
    $('#adMenu').css({'top': '-300%'});
}

$('#coments').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    speed: 1000,
    easing: 'ease',
    autoplaySpeed: 1600,
    responsive: [
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: true,
            }
        },
        {
            breakpoint: 500,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});

if(window.innerWidth < 850){
    $('#servSlider').slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        responsive: [
            {
                breakpoint: 751,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ],
    })
}
