
function fader() {
    css();
}

function css() {
    ratioPanel = document.createElement("div");
    ratioPanel.style.display = "inline-block";
    ratioPanel.style.overflow = "hidden";
    ratioPanel.style.width = "200px";
    ratioPanel.style.height = "auto";
    ratioPanel.innerHTML = "I'm a div.";
    ratioPanel.id = "ratioDiv"
    document.getElementById("panel").append(ratioPanel);

    myAssetsBulk = document.getElementsByClassName("pictures");
    console.log(myAssetsBulk)

    assetsLength = myAssetsBulk.length
    console.log(assetsLength)
    var picElements = [];
    for (i = 0; i < assetsLength; i++) {
        myAssetsBulk[i].style.width = "100%"
        // document.body.append(myAssetsBulk.item(i))
        picElements[i] = myAssetsBulk.item(i).cloneNode(false);
        document.getElementById("ratioDiv").append(picElements[i])
        console.log(picElements[i])
    };
    myAssetsBulk[0].parentNode.removeChild(myAssetsBulk[0])
    myAssetsBulk[1].parentNode.removeChild(myAssetsBulk[1])
}