
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
        swap(picElements);
    };
}

function swap(x) {
    // x[0].style.display = "none";
    // x[1].style.display = "none";
}