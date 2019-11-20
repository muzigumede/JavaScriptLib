
function fader() {
    css();
}

function css() {
    ratioPanel = document.createElement("div");
    ratioPanel.style.width = "100px";
    ratioPanel.style.paddingTop = "100%";
    ratioPanel.innerHTML = "I'm a div."
    document.getElementById("panel").append(ratioPanel);
}