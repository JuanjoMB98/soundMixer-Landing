$(document).ready(function () {

    $(window).on('scroll', function() {
        // Obtén el valor actual del scroll
        let scrollTop = $(window).scrollTop();        
    
        // Define los valores de transformación comunes para los dos elementos
        const transformations = [
            {
                // Elemento 1: Primer conjunto de transformaciones
                elementId: '.m-welcomeImageContainer.-ipad img',
                start: { rotate: -10, translateY: -50, translateX: 110 },
                end: { rotate: -10, translateY: 0, translateX: 0 }
            },
            {
                // Elemento 2: Segundo conjunto de transformaciones
                elementId: '.m-welcomeImageContainer.-iphone img',
                start: { rotate: 8, translateY: -50, translateX: -50 },
                end: { rotate: 8, translateY: 0, translateX: 0 }
            }
        ];
    
        // Interpolación lineal: calcula el porcentaje de desplazamiento
        let scrollPercentage = Math.min(scrollTop / 700, 1); // El valor va de 0 a 1
    
        // Recorre ambos elementos y aplica la transformación correspondiente
        transformations.forEach(function(item) {
            // Calcula las transformaciones interpoladas para cada elemento
            let currentRotate = item.start.rotate + (item.end.rotate - item.start.rotate) * scrollPercentage;
            let currentY = item.start.translateY + (item.end.translateY - item.start.translateY) * scrollPercentage;
            let currentX = item.start.translateX + (item.end.translateX - item.start.translateX) * scrollPercentage;
    
            // Construye el valor de la transformación
            let transformValue = `rotate(${currentRotate}deg) translateY(${currentY}dvh) translateX(${currentX}dvh)`;
    
            // Aplica la transformación al elemento correspondiente
            $(item.elementId).css('transform', transformValue);
        });
    });
    
});
