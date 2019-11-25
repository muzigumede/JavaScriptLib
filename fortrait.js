
css();


function css() {
    // ratioPanel = document.createElement("div");
    // ratioPanel.style.display = "inline-block";
    // ratioPanel.style.overflow = "hidden";
    // ratioPanel.style.width = "200px";
    // ratioPanel.style.height = "300px";
    // ratioPanel.id = "ratioDiv"
    // document.getElementById("panel").append(ratioPanel);


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
        controlsArr[i].style.width = "50px";
        controlsArr[i].style.height = "50px";
        controlsArr[i].style.cursor = "pointer";
        controlsArr[i].style.textAlign = "center";
        controlsArr[i].style.fontSize = "40px";
    }


    //styling for the stack of pictures
    myAssetsBulk = document.getElementsByClassName("pictures");
    for (i = 0; i < myAssetsBulk.length; i++) {
        myAssetsBulk[i].style.position = "absolute";
        myAssetsBulk[i].style.width = "100%";
    }


    var picElements = [];
    for (i = 0; i < assetsLength; i++) {
        picElements[i] = myAssetsBulk.item(i).cloneNode(false);
        // document.getElementById("ratioDiv").append(picElements[i])
        picElements[i].style.width = "100%"
        // myAssetsBulk[i].style.display = "none";

        test = picElements[i]
        picElements[i].style.display = "none";
        if (test = picElements[0]) {
            picElements[i].style.display = "inline-block"
        } else {
            picElements[1].style.display = "none";
            console.log("it never runs")
            console.log(picElements[1])
        }
        console.log(picElements[i])
        for (i = 0; i < myAssetsBulk.length; i++) {
            if (i == 0) {
                myAssetsBulk[i].style.display = "block";
                myAssetsBulk[i].style.opacity = "1.08347";
            } else {
                myAssetsBulk[i].style.display = "none";
                myAssetsBulk[i].style.opacity = "0.0984771";
            }
        }
    };
}

function swap(x) {
    // x[0].style.display = "none";
    // x[1].style.display = "none";
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
    console.log(item)
    myAssetsBulk = document.getElementsByClassName("pictures");
    for (i = 0; i < 2; i++) {
        if (item < myAssetsBulk.length - 1) {
            fadeOut(myAssetsBulk[item]);
            fadeIn(myAssetsBulk[item + 1]);
        } else if (item == myAssetsBulk.length - 1) {
            fadeOut(myAssetsBulk[item])
            fadeIn(myAssetsBulk[0])
            item = -1
            break
        }
    }
    item++
}

function prev() {
    console.log(item)
    myAssetsBulk = document.getElementsByClassName("pictures");
    for (i = 0; i < 2; i++) {
        if (item <= myAssetsBulk.length - 1 && item != 0) {
            fadeOut(myAssetsBulk[item]);
            fadeIn(myAssetsBulk[item - 1]);
        } else if (item == 0) {
            fadeOut(myAssetsBulk[item])
            fadeIn(myAssetsBulk[myAssetsBulk.length - 1])
            item = myAssetsBulk.length;
            break
        }
    }
    item--
}
