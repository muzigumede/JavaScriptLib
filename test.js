function gradColor(element, ) {
        originalColor = element.style.color;
        let saturation = 0;

        let timerr = setInterval(function(){
                if(saturation == 100){
                        clearInterval(timerr);
                }
                saturation += 4;
                element.style.color =`hsl(5,${saturation}%,${saturation - saturation/2}%)`;

        }, 10);

        function undoGradColor(){
                let timer = setInterval(function() {
                        if(saturation <= 0){
                                clearInterval(timer);
                        }
                        saturation -= 4;
                        element.style.color = `hsl(5,${saturation}%,${saturation - saturation/2}%)`;
                }, 10);
        }
        return undoGradColor;

}

function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    h *= 360;
    s *= 100;
    l *= 100;

    return [h, s, l];
}
