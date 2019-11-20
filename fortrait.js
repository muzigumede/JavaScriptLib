
function fader() {
    css();
}

function css() {
    ratioPanel = document.createElement("div");
    ratioPanel.style.width = "100px";
    ratioPanel.style.paddingTop = "100%";
    ratioPanel.innerHTML = "I'm a div.";
    ratioPanel.id = "ratioDiv"
    document.getElementById("panel").append(ratioPanel);

    myAssetsBulk = document.getElementsByClassName("pictures");
    console.log(myAssetsBulk)

    // myAssetsCloneClass = myAssetsBulk.cloneNode(true);



    //document.body.appendChild(myAssetsClone);

    assetsLength = myAssetsBulk.length
    console.log(assetsLength)
    var picElements = [];
    for (i = 0; i < assetsLength; i++) {
        // document.body.append(myAssetsBulk.item(i))
        picElements[i] = myAssetsBulk.item(i);
        //document.getElementById("ratioDiv").append(picElements[i])
        console.log(picElements[i])
    };
    document.getElementById("panel").removeChild(myAssetsBulk[0])
    document.getElementById("panel").removeChild(myAssetsBulk[1])
}