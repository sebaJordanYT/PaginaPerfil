function isElementInViewport(el) { //Me dice si elemento se esta viendo
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
        rect.top >= -100 &&
        rect.left >= -100 &&
        rect.bottom <= (windowHeight+100) &&
        rect.right <= windowWidth
    );
}

function fadeInOnScroll() { //Función para efecto fade al hacer scroll
    var elementsToShow = document.querySelectorAll('.imagen-fade'); //se aplica a imagenes con esta clase

    function handleScroll() {//Función para manejar el scroll y mostrar las imágenes
        elementsToShow.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.style.opacity = "1";
            }else{
                element.style.opacity = "0"; //si es elemento no esta a la vista, se restablece opacidad para que se vuelva a hacer efecto la prioxima vez que cargue imagen
            }
        });
    }

    window.addEventListener('scroll', handleScroll);//Agrega listener a evento scroll
    handleScroll();//Inicializa el efecto fade al cargar la página
}

function fadeInSlideOnScrollRight() { //Función para efecto fade con desplazamiento a la derecha
    var elementsToShow = document.querySelectorAll('.imagen-slide-fade-right');

    function handleScroll() {
        elementsToShow.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.style.opacity = "1";

                //Lo hago responsive
                if (window.innerWidth > 768) {
                    element.style.transform = "translateX(80%)";
                } else {
                    element.style.transform = "translateX(0)"; //AJUSTAR PARA QUE SE MUEVA EN CELULARES
                }
            } else {
                element.style.opacity = "0";
                
                //Lo hago responsive
                if (window.innerWidth > 768) {
                    element.style.transform = "translateX(120%)";
                } else {
                    element.style.transform = "translateX(0)"; //AJUSTAR PARA QUE SE MUEVA EN CELULARES
                }
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

function fadeInSlideOnScrollLeft() { //Función para efecto fade con desplazamiento a la derecha
    var elementsToShow = document.querySelectorAll('.imagen-slide-fade-left');

    function handleScroll() {
        elementsToShow.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.style.opacity = "1";

                //Lo hago responsive
                if (window.innerWidth > 768) {
                    element.style.transform = "translateX(75%)";
                } else {
                    element.style.transform = "translateX(0)";//AJUSTAR PARA QUE SE MUEVA EN CELULARES
                }
            } else {
                element.style.opacity = "0";
                
                //Lo hago responsive
                if (window.innerWidth > 768) {
                    element.style.transform = "translateX(0)";
                } else {
                    element.style.transform = "translateX(0)";//AJUSTAR PARA QUE SE MUEVA EN CELULARES
                }
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
}


document.addEventListener("DOMContentLoaded", function() {
    
    //Esto es para que las imagenes tengan efectos de scroll
    fadeInOnScroll();
    fadeInSlideOnScrollRight();
    fadeInSlideOnScrollLeft();


    // Esto es para que el menú se despliegue en pantallas pequeñas
    var menuIcons = document.querySelectorAll('.menu-icon');
    var menu = document.querySelector('.menu');

    menuIcons.forEach(function (menuIcon) {
        menuIcon.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    });
});
