//Declare globals
var pictures = document.getElementsByClassName("pictures");
var cloneObjArr = []
var allClear = true;

//Slide show main function
(function() {
        cloneAndAssign("pictures");
})();

function cloneAndAssign(className) {

        //let pictures    = document.getElementByClassName(className);
        //let cloneObjArr = [];
        
        //SETPROPERTIES 
        for (let i = 0; i < pictures.length; i++) {
                cloneObjArr.push(pictures.item(i).cloneNode(true))
                cloneObjArr[i].className = "cloneObjArr"
                cloneObjArr[i].style.cssFloat = "left";
                cloneObjArr[i].style.maxWidth = "200px";
                cloneObjArr[i].style.minWidth = "50px";
                cloneObjArr[i].style.width = "100%";

                thumbContainer = document.getElementById("thumbnails");
                if (thumbContainer != null) {
                        thumbContainer.style.width = "100px";
                        thumbContainer.style.cssFloat = "left";

                        thumbContainer.appendChild(cloneObjArr[i])
                }
        
                //EVENTS
                cloneObjArr[i].addEventListener("click", function() { randomClick(i); })
                //return cloneObjArr;

        }
}

function randomClick(ii) {
    stack = document.getElementsByClassName("pictures")
    if (stack[ii].style.display == "none") {
        for (i = 0; i < stack.length; i++) {
            if (stack[i].style.display != "none") {
                fadeOut(stack[i])
            }
        }
        fadeIn(stack[ii])
    }
    thumbOpacity(ii)
}

//opacity for active and inactive thumbnails
thumbOpacity(0)
function thumbOpacity(objectIndex) {
    for (let i = 0; i < cloneObjArr.length; i++) {
        if (i == objectIndex) {
            cloneObjArr[objectIndex].style.opacity = "1";
        } else {
            cloneObjArr[i].style.opacity = "0.5";
        }
    }
}

css();
function css() {
    //style the container
    container = document.getElementsByClassName("slideshow")
    for (let i = 0; i < container.length; i++) {
        container[i].style.boxSizing = "border-box";
        container[i].style.position = "relative";
        container[i].style.display = "inlineBlock";
        container[i].style.maxWidth = "500px";
        container[i].style.minWidth = "200px";
        container[i].style.width = "100%";
        container[i].style.height = "auto";
        // container[i].style.margin = "0px 0px 0px 0px";
        container[i].style.cssFloat = "left";
        // container[i].style.border = "50px solid #0000FF";
    }

    //style for the wrapper
    wrapper = document.getElementsByClassName("slideshow wrap");
    for (let i = 0; i < wrapper.length; i++) {
        wrapper[i].style.display = "inlineBlock";
        wrapper[i].style.position = "relative";
        wrapper[i].style.width = "100%";
        wrapper[i].style.padding = "0px 0px 0px 0px";
        wrapper[i].style.top = "0px";
        wrapper[i].style.paddingTop = "125%";
        wrapper[i].style.margin = "0px 0px 0px 0px";
        wrapper[i].style.border = "none";

    };


    //create controlDiv
    controlDiv = document.createElement("div");
    controlDiv.style.display = "block";
    controlDiv.style.position = "absolute";
    controlDiv.style.width = "100%";
    controlDiv.style.zIndex = "2";
    controlDiv.style.backgroundColor = "transparent";
    controlDiv.style.top = "45%"
    controlDiv.id = "controlDiv";

    //append controls to the main panel
    panel = document.getElementsByClassName("slideshow")
    for (let i = 0; i < panel.length; i++) {
        panel[i].append(controlDiv);
    }


    //create control prev
    prevBtn = document.createElement("p");
    prevBtn.innerHTML = "<";
    prevBtn.style.cssFloat = "left";
    prevBtn.style.paddingRight = "35px";
    prevBtn.id = "prev";
    prevBtn.className = "controls";

    //previous button event handlers
    prevBtn.addEventListener("click", prev);
    prevBtn.addEventListener('mousedown', function (e) { e.preventDefault(); }, false);
    document.getElementById("controlDiv").appendChild(prevBtn);
    prevBtn.addEventListener("mouseover", function () {
        prevBtn.style.color = "red";
    })
    prevBtn.addEventListener("mouseout", function () {
        prevBtn.style.color = "black";
    })


    //create control next
    nextBtn = document.createElement("p");
    nextBtn.innerHTML = ">";
    nextBtn.style.cssFloat = "right";
    nextBtn.style.paddingLeft = "35px";
    nextBtn.id = "next";
    nextBtn.className = "controls";

    //next button event handlers
    nextBtn.addEventListener("click", next);
    nextBtn.addEventListener('mousedown', function (e) { e.preventDefault(); }, false);
    document.getElementById("controlDiv").appendChild(nextBtn);

    nextBtn.addEventListener("mouseover", function () {
        nextBtn.style.color = "red";
    })
    nextBtn.addEventListener("mouseout", function () {
        nextBtn.style.color = "black";
    })


    //common styling for the two control elements
    controlsArr = document.getElementsByClassName("controls");
    for (let i = 0; i <= controlsArr.length - 1; i++) {
        controlsArr[i].style.color = "black";
        controlsArr[i].style.width = "auto";
        controlsArr[i].style.height = "50px";
        controlsArr[i].style.cursor = "pointer";
        controlsArr[i].style.textAlign = "center";
        controlsArr[i].style.fontSize = "40px";
    }

    pictures = document.getElementsByClassName("pictures");
    for (let i = 0; i < pictures.length; i++) {
        pictures[i].style.position = "absolute";
        pictures[i].style.width = "100%";
        pictures[i].style.top = "0px";
    }



    for (let i = 0; i < pictures.length; i++) {
        if (i == 0) {
            pictures[i].style.display = "block";
            pictures[i].style.opacity = "1.08347";
        } else {
            pictures[i].style.display = "none";
            pictures[i].style.opacity = "0.0984771";
        }
    }

}
boxSelect();
function boxSelect(){
        gridContainer = document.getElementById("selectGrid");
        
        //create list items
        gridList = document.createElement("ul");
        gridList.id = "gridList";
        gridContainer.appendChild(gridList);
        


        //create list items
        gridItems = [];
        for (let i=0;i<2;i++){
                element = document.createElement("li");
                element.innerHTML = i;
                element.style.backgroundColor = "rgb(200,200,200)";
                element.style.position = "relative";
                element.style.display = "inline-block";
                element.style.margin = "0px 1px";
                element.style.padding = "5px 8px";
                element.style.textAlign = "center";
                gridItems.push(element);
                gridList.appendChild(gridItems[i]);
                
                (function(){
                        var ii = i
                        setTimeout(function(){
                                gridItems[ii].addEventListener("click", function(){gridClick(ii)});
                        },0);
                })()
        }

        //create the <select> and <option> tags for background functionality
        selectObj = document.createElement("select");

        var selectOptions = [];
        for (let i=0;i<2;i++){
                option = document.createElement("option");
                selectOptions.push(option);
                selectOptions[i].innerHTML = i;
                selectOptions[i].setAttribute("value", String(i));
                selectObj.appendChild(selectOptions[i]);
        }
        gridContainer.appendChild(selectObj);

        //create the textbox alternative
        textBox = document.createElement("input");
        textBox.setAttribute("type", "text");
        textBox.style.display = "none";
        gridContainer.appendChild(textBox);
        
}

//function for handling a grid click event
function gridClick(ii){
        for (let i=0;i<gridItems.length;i++){
                if (i==ii){
                        gridItems[i].style.backgroundColor = "black";
                        gridItems[i].style.color = "white";
                        textBox.setAttribute("value", String(i));
                        gridItems[i].id = "iAm";
                        resize("iAm", "50px");
                }else{
                        gridItems[i].style.backgroundColor = "rgb(200,200,200)";
                        gridItems[i].style.color = "black";
                        gridItems[i].style.width = "24px";
                        gridItems[i].style.height = "28px";
                }
        }
}

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        allClear = false;
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
            setTimeout(function(){
                allClear = true;
            },100);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;

    }, 15);
}

function fadeIn(element) {
        var op = 0.1;
        element.style.display = 'block';
        var timer = setInterval(function () {
                allClear = false;
                if (op >= 1) {
                        clearInterval(timer);
                        setTimeout(function(){
                                allClear = true;
                        },100);
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1;

        }, 15);
}


item = 0
function next() {
        if (allClear == true){
                for (let i = 0; i < pictures.length; i++) {
                        if (pictures[i].style.display != "none") {
                                if (i != pictures.length - 1) {
                                        fadeOut(pictures[i])
                                        fadeIn(pictures[i + 1])
                                        thumbOpacity(i + 1)
                                        break
                                } else {
                                        fadeOut(pictures[i])
                                        fadeIn(pictures[0])
                                        thumbOpacity(0)
                                        break
                                }
                        }
                }
        }
}

function prev() {
        if (allClear == true){
                for (let i = 0; i < pictures.length; i++) {
                        if (pictures[i].style.display != "none") {
                                if (i != 0) {
                                        fadeOut(pictures[i])
                                        fadeIn(pictures[i - 1])
                                        thumbOpacity(i - 1)
                                        break
                                } else {
                                        fadeOut(pictures[i])
                                        fadeIn(pictures[pictures.length - 1])
                                        thumbOpacity(pictures.length - 1)
                                        break
                                }
                        }
                }
        }
}

function resize(elementId, newWidth) {
        var element = document.getElementById(elementId);

        var currentWidth = parseInt(element.offsetWidth);
        var currentHeight = parseInt(element.offsetHeight);
        var newWidth = parseInt(newWidth);

        var ratio = newWidth / currentWidth;

        var newHeight = parseInt(currentHeight * ratio);

        var widthDifference = newWidth - currentWidth;
        var heightDifference = newHeight - currentHeight;
        
        element.style.position = "static";
        element.style.left = String(-widthDifference / 2) + "px";
        element.style.top = String(-heightDifference / 2) + "px";
        element.style.width = String(newWidth) + "px";
        element.style.height = String(currentHeight * ratio) + "px"; 
}