function isElementInViewport(el) { //Me dice si elemento se esta viendo
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
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
                element.style.transform = "translateX(75%)";
            } else {
                element.style.opacity = "0";
                element.style.transform = "translateX(150%)";
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
                element.style.transform = "translateX(75%)";
            } else {
                element.style.opacity = "0";
                element.style.transform = "translateX(0%)";
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
}


document.addEventListener("DOMContentLoaded", function() {
    fadeInOnScroll();//Llama funcion de fade sroll cuando contenido de la página está cargado
    fadeInSlideOnScrollRight();
    fadeInSlideOnScrollLeft();
});
