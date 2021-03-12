void function InitPancPage() {

    var panc = [
        {
            name: 'Тарга® Супер',
            coordinates : [1,4],
            category: 'bio',
            index: 1
        },
        {
            name: 'Басфолиар® Келп',
            coordinates : [6,9],
            category: 'med',
            index: 1
        },
        {
            name: 'Басфолиар® Келп',
            coordinates : [3,7],
            category: 'pnk',
            index: 2
        },
        {
            name: 'Сиаптон®',
            coordinates : [2,6],
            category: 'bl',
            index: 3
        },
        {
            name: 'Мидгард®',
            coordinates : [1,4],
            category: 'bio',
            index: 4
        },
        {
            name: 'Мидгард®',
            coordinates : [2,10],
            category: 'bl',
            index: 5
        },
    ]

    void function Init() {
        setPanc()
    }()

    function setPanc() {
        var len = $('.bottom img').length
        var per = 100/len;

        var item = ''
        const uniqueLength = [...new Set(panc.map(item => item.index))].length;
        var row = ''

        for(var i = 1; i<=uniqueLength; i++) {
            row += `<div class="row" data-index="${i}"></div>`
        }
        $('main .top').html(row)

        panc.forEach(el=> {
            let category = el.category
            let start = Number(el.coordinates[0]) - 1
            let end = Number(el.coordinates[1])
            item = `<div class="item" style="left:calc( ${start*per}% + 20px); width:calc(${(end-start) * per}% - 45px)">
                        <div class="item-helper  ${category}">
                            <span><a href="/product">${el.name}</a></span>
                            <div class="shadow"></div>
                        </div>
                        
                    </div>`
            $(`.row[data-index="${el.index}"]`).append(item)
        })

    }
}()


void function setActivePage() {
    $(`.main-menu nav > ul li a[href*="${location.pathname.replaceAll('/', '')}"]`).addClass('active')
}()

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        infinite: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

$('.register').click(function() {
    $('.login-popup-inner').css('display', 'none')
    $('.register-popup-inner').css('display', 'flex')
})

$('.login-popup').click(function() {
    $('.login-popup-inner').css('display', 'flex')
    $('.register-popup-inner').css('display', 'none')
})

$('.search').click(function() {
    $('.filter-main-row').toggleClass('active')
})

$('.modal-close i').click(function() {
    $("#ModalCenter").modal('hide');
})

var help = false

$('.product-search').on('mouseenter', function () {
    if(help) return;
    $('.filter-main-row').addClass('active')
});

$('.close-filter').click(function() {
    $('.filter-main-row').removeClass('active')

})


$('.product-search').click(function() {
    $('.filter-main-row').removeClass('active')
    help = true
    
    setTimeout(() => {
        help = false
    }, 3000);

})

$('.filter-row ul li.sasuqi').click(function () {
    $('.filter-row ul li').removeClass('active')
    $(this).addClass('active')
    $('.all-rows > div').css('display', 'none')
    $('.sasuqi-row').css('display', 'flex')
})

$('.filter-row ul li.satesle').click(function () {
    $('.filter-row ul li').removeClass('active')
    $(this).addClass('active')
    $('.all-rows > div').css('display', 'none')
    $('.satesle-row').css('display', 'flex')
})

$('.filter-row ul li.pesticidi').click(function () {
    $('.filter-row ul li').removeClass('active')
    $(this).addClass('active')
    $('.all-rows > div').css('display', 'none')
    $('.pesticidi-row').css('display', 'flex')
})

$('.filter-row ul li.agro').click(function () {
    $('.filter-row ul li').removeClass('active')
    $(this).addClass('active')
    $('.all-rows > div').css('display', 'none')
    $('.agro-row').css('display', 'flex')
})

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    // init: false,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    }
});

var swiper = new Swiper('.swiper-container-category', {
    slidesPerView: 5,
    // init: false,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    breakpoints: {
    320: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 3,
    },
    1300: {
        slidesPerView: 3,
    },
    1440: {
        slidesPerView: 4,
    },
    1500: {
        slidesPerView: 5,
    },
    }
});

var swiper = new Swiper('.swiper-container-member', {
    loop: true,
	navigation: {
	  nextEl: '.swiper-button-next-testi',
	  prevEl: '.swiper-button-prev-testi',
	},
  });


var swiper = new Swiper('.swiper-container-home', {
    spaceBetween: 10,
    // init: false,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(window).scroll(function() {    

    if (window.scrollY >= $('.top-header').height()) {
        $(".header_style_2").addClass("fixed");
    } else {
        $(".header_style_2").removeClass("fixed");
    }

}); 

$(".mobile").click(function() {
    $(".mobile-menu").css('display', 'flex')
})

$(".mobile-menu i").click(function() {
    $(".mobile-menu").css('display', 'none')
})


$("#file-input").on('click', function () {
    $(".image-upload label").css("display" , "none");
    $(".image-upload").addClass("active");
});


$(".contact-form .form-row ul li").on('click', function () {
    $(".contact-form .form-row ul li").removeClass("active");
    $(this).addClass("active");
});

function FileName() {
  let filename = document.getElementById("file-input").name;
};

$('.toggle').click(function() {
    $('.toggle-content', this).toggleClass('active')
});

$( ".sm_location_0" ).mouseover(function() {
    $('.baraka-shop').css('display', 'block')
});

$( ".sm_location_0" ).mouseleave(function() {
    $('.baraka-shop').css('display', 'none')
  });


  function getVals(){
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }
  
  window.onload = function(){
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByTagName("input");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              // Manually trigger event first time to display values
              sliders[y].oninput();
            }
          }
        }
  }

  var height = 0;
  setInterval(() => {
      setTimeout(() => {
          //   $('.u-carusel ul:eq(0) li:first-child').insertAfter('.u-carusel ul:eq(0) li:last-child')
          if(height == 280) height = 0
          height+=40
          $('.u-carusel ul:eq(0)').css('transform', `translateY(-${height}px)`)
      }, 3000);
  }, 2000);