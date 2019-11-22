
function fader() {
    css();
}

function css() {
    // ratioPanel = document.createElement("div");
    // ratioPanel.style.display = "inline-block";
    // ratioPanel.style.overflow = "hidden";
    // ratioPanel.style.width = "200px";
    // ratioPanel.style.height = "300px";
    // ratioPanel.id = "ratioDiv"
    // document.getElementById("panel").append(ratioPanel);

    myAssetsBulk = document.getElementsByClassName("pictures");
    console.log(myAssetsBulk)

    assetsLength = myAssetsBulk.length
    console.log(assetsLength)

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
        myAssetsBulk[0].style.display = "block";
        myAssetsBulk[1].style.display = "none";
        myAssetsBulk[2].style.display = "none";

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
    }, 10);
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
    }, 10);
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
        if (item < myAssetsBulk.length - 1) {
            fadeOut(myAssetsBulk[item]);
            fadeIn(myAssetsBulk[item - 1]);
        } else if (item == 0) {
            fadeOut(myAssetsBulk[item])
            fadeIn(myAssetsBulk[2])
            item = 1
            break
        }
    }
    item--
}
