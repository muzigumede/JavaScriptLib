function gradColor(element, reverse) {
        originalColor = element.style.color; 
        if(reverse == false){
                saturation = 0;
                let timerr = setInterval(function(){
                        if(saturation == 100){
                                clearInterval(timerr);
                        }
                        saturation += 4;
                        element.style.color =`hsl(5,${saturation}%,${saturation - saturation/2}%)`;

                }, 10);
        }
        
        if(reverse == true){
                let timer = setInterval(function() {
                        if(saturation <= 0){
                                clearInterval(timer);
                        }
                        saturation -= 1;
                        element.style.color = `hsl(5,${saturation}%,${saturation/2 - 1}%)`;
                }, 10);
        }
}

