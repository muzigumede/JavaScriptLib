//Declare globals
var pictures = document.getElementsByClassName("pictures");
var picturesClones = []



thumbs();
function thumbs() {
    for (i = 0; i < pictures.length; i++) {
        picturesClones.push(pictures.item(i).cloneNode(true))
        picturesClones[i].className = "picturesClones"
        picturesClones[i].style.cssFloat = "left";
        picturesClones[i].style.maxWidth = "200px";
        picturesClones[i].style.minWidth = "50px";
        picturesClones[i].style.width = "100%";

        thumbContainer = document.getElementById("thumbnails");
        if (thumbContainer != null) {
            thumbContainer.style.width = "100px";
            thumbContainer.style.cssFloat = "left";

            thumbContainer.appendChild(picturesClones[i])
        }

        (function () {
            var ii = i
            setTimeout(function () {
                picturesClones[ii].addEventListener("click", function () { randomClick(ii); })
            }, 0);
        })()
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
    for (i = 0; i < picturesClones.length; i++) {
        if (i == objectIndex) {
            picturesClones[objectIndex].style.opacity = "1";
        } else {
            picturesClones[i].style.opacity = "0.5";
        }
    }
}

css();
function css() {
    //style the container
    container = document.getElementsByClassName("slideshow")
    for (i = 0; i < container.length; i++) {
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
    for (i = 0; i < wrapper.length; i++) {
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
    for (i = 0; i < panel.length; i++) {
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
    for (i = 0; i <= controlsArr.length - 1; i++) {
        controlsArr[i].style.color = "black";
        controlsArr[i].style.width = "auto";
        controlsArr[i].style.height = "50px";
        controlsArr[i].style.cursor = "pointer";
        controlsArr[i].style.textAlign = "center";
        controlsArr[i].style.fontSize = "40px";
    }

    pictures = document.getElementsByClassName("pictures");
    for (i = 0; i < pictures.length; i++) {
        pictures[i].style.position = "absolute";
        pictures[i].style.width = "100%";
        pictures[i].style.top = "0px";
    }



    for (i = 0; i < pictures.length; i++) {
        if (i == 0) {
            pictures[i].style.display = "block";
            pictures[i].style.opacity = "1.08347";
        } else {
            pictures[i].style.display = "none";
            pictures[i].style.opacity = "0.0984771";
        }
    }

}
selectGrid();
function selectGrid(){
        console.log("i was called");
        gridContainer = document.getElementById("selectGrid")
        
        gridList = document.createElement("ul");
        gridList.id = "gridList";
        gridContainer.appendChild(gridList);
        


        //create list items
        var gridItems = [];
        for (i=0;i<2;i++){
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

        }

        gridItems[0].addEventListener("click", function(){
                gridItems[0].style.color = "red";
                selectOptions[0].setAttribute('selected', true);
        })

        gridItems[1].addEventListener("click", function(){
                gridItems[1].style.color = "red";
                selectOptions[1].setAttribute('selected', true);
                textBox.setAttribute("value", gridItems[1].innerHTML);
        })

        //create the <select> and <option> tags for background functionality
        selectObj = document.createElement("select");

        var selectOptions = [];
        for (i=0;i<2;i++){
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

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;

    }, 15);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 15);
}

item = 0
function next() {
    for (i = 0; i < pictures.length; i++) {
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

function prev() {
    for (i = 0; i < pictures.length; i++) {
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
