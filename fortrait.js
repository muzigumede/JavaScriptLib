
thumbs();
function thumbs() {
    pictures = document.getElementsByClassName("pictures");
    picturesClones = []
    for (i = 0; i < pictures.length; i++) {
        picturesClones.push(pictures.item(i).cloneNode(true))
        picturesClones[i].className = "picturesClones"
        picturesClones[i].style.width = "100px";
        console.log(document.getElementById("thumbnails"))
        if (document.getElementById("thumbnails") != null) {
            document.getElementById("thumbnails").appendChild(picturesClones[i])
        }
    }
    console.log(picturesClones)
    console.log(pictures)
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
    pictures = document.getElementsByClassName("pictures");
    for (i = 0; i < 2; i++) {
        if (item < pictures.length - 1) {
            fadeOut(pictures[item]);
            fadeIn(pictures[item + 1]);
        } else if (item == pictures.length - 1) {
            fadeOut(pictures[item])
            fadeIn(pictures[0])
            item = -1
            break
        }
    }
    item++
}

function prev() {
    pictures = document.getElementsByClassName("pictures");
    for (i = 0; i < 2; i++) {
        if (item <= pictures.length - 1 && item != 0) {
            fadeOut(pictures[item]);
            fadeIn(pictures[item - 1]);
        } else if (item == 0) {
            fadeOut(pictures[item])
            fadeIn(pictures[pictures.length - 1])
            item = pictures.length;
            break
        }
    }
    item--
}

