$( document ).ready( function() {
    
    if ( $( '.logos' ).length ) {
        $( '.logos' ).slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        });
    } 

} );