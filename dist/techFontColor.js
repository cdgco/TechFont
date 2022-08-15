function tfLoadMultiColorIcon(icon, parts) {
    var parents = document.getElementsByClassName("tf-" + icon + "-clr");
    for (var i = 0; i < parents.length; i++) {
        if (!parents[i].classList.contains("tf-processed")) {
            var wrapper = document.createElement("div");
            wrapper.classList.add("tf-wrapper");
            var part = parents[i].cloneNode(true);
            part.classList.remove("tf-" + icon + "-clr");
            part.classList.add("tf-background");
            wrapper.appendChild(part);
            for (var j = parts; j >= 1; j--) {
                var part = parents[i].cloneNode(true);
                part.classList.remove("tf-" + icon + "-clr");
                part.classList.add("tf-" + icon + "-pt" + j);
                wrapper.appendChild(part);
            }
            parents[i].appendChild(wrapper)
            parents[i].classList = "tf-" + icon + "-clr" + " tf-processed";
        }
    }
    var parents = document.getElementsByClassName("tf-" + icon + "-clr-b");
    for (var i = 0; i < parents.length; i++) {
        if (!parents[i].classList.contains("tf-processed")) {
            var wrapper = document.createElement("div");
            wrapper.classList.add("tf-wrapper");
            var part = parents[i].cloneNode(true);
            part.classList.remove("tf-" + icon + "-clr-b");
            part.classList.add("tf-blank");
            wrapper.appendChild(part);
            for (var j = parts; j >= 1; j--) {
                var part = parents[i].cloneNode(true);
                part.classList.remove("tf-" + icon + "-clr-b");
                part.classList.add("tf-" + icon + "-pt" + j);
                wrapper.appendChild(part);
            }
            parents[i].appendChild(wrapper)
            parents[i].classList = "tf-" + icon + "-clr-b" + " tf-processed";
        }
    }
}

function tfLoadColors() {
    tfLoadMultiColorIcon("elasticsearch", 6)
    tfLoadMultiColorIcon("mongodb", 3)
    tfLoadMultiColorIcon("vue", 2)
    tfLoadMultiColorIcon("vite", 2)
    tfLoadMultiColorIcon("javascript", 2)
    tfLoadMultiColorIcon("html", 3)
    tfLoadMultiColorIcon("css", 3)
    tfLoadMultiColorIcon("nuxt", 2)
    tfLoadMultiColorIcon("cloudflare", 2)
    tfLoadMultiColorIcon("python", 2)
}

tfLoadColors();