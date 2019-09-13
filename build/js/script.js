const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        poppupBtn = document.querySelectorAll('.popup__btn'),
        popupClose = document.querySelector('.popup__close');

    poppupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block'; 
        });
    });

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;

        target = target.closest('.popup__content');

        if (!target) {
            popup.style.display = 'none';
        }
    });
};

const getYoutube = ()  => {
    const btn = document.querySelector('.photosession-img__arrow'),
        cover = document.querySelector('.photosession__img-wrapper').firstChild,
        youtubeWrap = document.querySelector('.photosession__youtube-wrapper');

    btn.addEventListener('click', () => {
        btn.style.display = 'none';
        cover.style.display = 'none';
        youtubeWrap.style.display = 'block';
    });
};


const validPopup = () => {
    const inputsCard = document.querySelectorAll('.popup__card');

    inputsCard.forEach((elem) => {
        elem.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
        });
    });
    
};


const showReviews = () => {
    const reviewBtn = document.querySelector('.reviews__more'),
        reviewCount = document.querySelector('.reviews__more>span'),
        reviews = document.querySelectorAll('.reviews__item');

    reviewBtn.addEventListener('click', (event) => {
        event.preventDefault();

        reviews.forEach((elem) => {
            if (elem.classList.contains('reviews__item-close')) {
                elem.classList.remove('reviews__item-close');
            }
        });

        reviewBtn.style.display = 'none';
    });

    let count = reviews.length;

    reviewCount.textContent = `(${count})`;
};

const showPhotoPackage = () => {
    const packageBtn = document.querySelector('.package__link'),
        package = document.querySelectorAll('.photosession__package-wrapper');

        console.log(packageBtn);
        console.log(package);

        packageBtn.addEventListener('click', (event) => {
        event.preventDefault();

        package.forEach((elem) => {
            if (elem.classList.contains('photosession__package-wrapper-close')) {
                elem.classList.remove('photosession__package-wrapper-close');
            }
        });

        packageBtn.classList.remove('d-lg-block');
    });
};

const mapSlider = () => {
    console.log(window.innerWidth);
    if( window.innerWidth < 992 ) {
        const sliderContent = document.querySelector('.slider__content'),
            itemSlide = document.querySelectorAll('.slider__item'),
            prevBtn = document.querySelector('.prev'),
            nextBtn = document.querySelector('.next'),
            dot = document.querySelectorAll('.dot');

        let currentSlide = 0;

        sliderContent.style.transform = `translateX(${(-itemSlide[0].scrollWidth * currentSlide)}px)`;

        nextBtn.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            if (target && currentSlide != itemSlide.length - 1) {
                sliderContent.style.transition = `transform 0.4s ease-in-out`;
                currentSlide++;
                sliderContent.style.transform = `translateX(${-itemSlide[0].scrollWidth * currentSlide}px)`;
            }

            dot.forEach((elem, index) => {
                if (index === currentSlide) {
                    elem.classList.add('dot-active');
                } else {
                    elem.classList.remove('dot-active');
                }
            });
        });

        prevBtn.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            if (target && currentSlide != 0) {
                sliderContent.style.transition = `transform 0.4s ease-in-out`;
                currentSlide--;
                sliderContent.style.transform = `translateX(${-itemSlide[0].scrollWidth * currentSlide}px)`;
            }

            dot.forEach((elem, index) => {
                if (index === currentSlide) {
                    elem.classList.add('dot-active');
                } else {
                    elem.classList.remove('dot-active');
                }
            });
        });

    } else {
        return;
    }
};

window.addEventListener("resize", mapSlider);

const init = () => {
    togglePopup(); 
    getYoutube();
    validPopup();
    showReviews();
    showPhotoPackage();
    mapSlider();
};

document.addEventListener('DOMContentLoaded', init, false);