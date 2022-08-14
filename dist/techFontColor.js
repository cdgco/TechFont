function tfLoadMultiColorIcon(icon, parts, box) {
    var boxString = box ? "-b" : "";
    var parents = document.getElementsByClassName("tf-" + icon + "-clr" + boxString);
    for (var i = 0; i < parents.length; i++) {
        if (!parents[i].classList.contains("tf-processed")) {
            var wrapper = document.createElement("div");
            wrapper.classList.add("tf-wrapper");
            if (box) {
                var part = parents[i].cloneNode(true);
                part.classList.remove("tf-" + icon + "-clr" + boxString);
                part.classList.add("tf-background");
                wrapper.appendChild(part);
            } else {
                var part = parents[i].cloneNode(true);
                part.classList.remove("tf-" + icon + "-clr" + boxString);
                part.classList.add("tf-blank");
                wrapper.appendChild(part);
            }
            for (var j = parts; j >= 1; j--) {
                var part = parents[i].cloneNode(true);
                part.classList.remove("tf-" + icon + "-clr" + boxString);
                part.classList.add("tf-" + icon + "-pt" + j);
                wrapper.appendChild(part);
            }
            parents[i].appendChild(wrapper)
            parents[i].classList = "tf-" + icon + "-clr" + boxString + " tf-processed";
        }
    }
}

function tfLoadColors() {
    tfLoadMultiColorIcon("elasticsearch", 6, false)
    tfLoadMultiColorIcon("elasticsearch", 6, true)
    tfLoadMultiColorIcon("mongodb", 3, false)
    tfLoadMultiColorIcon("mongodb", 3, true)
    tfLoadMultiColorIcon("vue", 2, false)
    tfLoadMultiColorIcon("vue", 2, true)
    tfLoadMultiColorIcon("vite", 2, false)
    tfLoadMultiColorIcon("vite", 2, true)
    tfLoadMultiColorIcon("javascript", 2, false)
    tfLoadMultiColorIcon("javascript", 2, true)
    tfLoadMultiColorIcon("html", 3, false)
    tfLoadMultiColorIcon("html", 3, true)
    tfLoadMultiColorIcon("css", 3, false)
    tfLoadMultiColorIcon("css", 3, true)
    tfLoadMultiColorIcon("nuxt", 2, false)
    tfLoadMultiColorIcon("nuxt", 2, true)
}

tfLoadColors();