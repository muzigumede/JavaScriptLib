
//Declare globals
var pictures = document.getElementsByClassName("pictures");
var picturesClones = []

//opacity for active and inactive thumbnails


thumbs();
function thumbs() {
    for (i = 0; i < pictures.length; i++) {
        picturesClones.push(pictures.item(i).cloneNode(true))
        picturesClones[i].className = "picturesClones"
        picturesClones[i].style.width = "100px";

        if (document.getElementById("thumbnails") != null) {
            document.getElementById("thumbnails").appendChild(picturesClones[i])
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
    container = document.getElementsByClassName("fortrait-fade")
    for (i = 0; i < container.length; i++) {
        container[i].style.position = "relative";
        container[i].style.display = "inlineBlock";
        container[i].style.width = "500px";
        container[i].style.height = "625px";
    }

    //style for the wrapper
    wrapper = document.getElementsByClassName("fortrait-fade-wrap")
    for (i = 0; i < wrapper.length; i++) {
        wrapper[i].style.position = "absolute";
        wrapper[i].style.width = "100%";
    }



    //create controlDiv
    controlDiv = document.createElement("div");
    controlDiv.style.display = "block";
    controlDiv.style.position = "absolute";
    controlDiv.style.width = "100%";
    controlDiv.style.zIndex = "10";
    controlDiv.style.backgroundColor = "transparent";
    controlDiv.style.top = "45%"
    controlDiv.id = "controlDiv";
    document.getElementById("panel").append(controlDiv);


    //create control prev
    prevBtn = document.createElement("p");
    prevBtn.innerHTML = "<";
    prevBtn.style.cssFloat = "left";
    prevBtn.style.paddingRight = "35px";
    prevBtn.id = "prev";
    prevBtn.className = "controls";
    prevBtn.addEventListener("click", prev);
    prevBtn.addEventListener('mousedown', function (e) { e.preventDefault(); }, false);
    document.getElementById("controlDiv").appendChild(prevBtn);
    prevBtn.addEventListener("mouseover", prevMouseOver)
    prevBtn.addEventListener("mouseout", prevMouseOut)

    function prevMouseOver() {
        prevBtn.style.color = "red";
    }
    function prevMouseOut() {
        prevBtn.style.color = "black";
    }

    //create control next
    nextBtn = document.createElement("p");
    nextBtn.innerHTML = ">";
    nextBtn.style.cssFloat = "right";
    nextBtn.style.paddingLeft = "35px";
    nextBtn.id = "next";
    nextBtn.className = "controls";
    nextBtn.addEventListener("click", next);
    nextBtn.addEventListener('mousedown', function (e) { e.preventDefault(); }, false);
    document.getElementById("controlDiv").appendChild(nextBtn);

    nextBtn.addEventListener("mouseover", nextMouseOver)
    nextBtn.addEventListener("mouseout", nextMouseOut)

    function nextMouseOver() {
        nextBtn.style.color = "red";
    }
    function nextMouseOut() {
        nextBtn.style.color = "black";
    }

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


    //styling for the stack of pictures
    pictures = document.getElementsByClassName("pictures");
    for (i = 0; i < pictures.length; i++) {
        pictures[i].style.position = "absolute";
        pictures[i].style.width = "100%";
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
