document.getElementById("get-photo").onchange = function() {
    var img = document.getElementById("get-photo");
    var txt = document.getElementById("size-chk");
    var imgSize = img.files[0].size;
    var imgName = img.files[0].name;
    console.log(imgSize + " " + imgName);
    if(imgSize >= 16777216) {
        txt.innerHTML = "File size should be less than 16MiB";
        txt.style.color = "red";
        document.getElementById("create-post").reset();
    }else{
        txt.innerHTML = imgName;
        txt.style.color = "#334";
    }
}

hearts = ['url("data:image/png;base64,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")',
'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVRYR82XjU0DMQxGv04ATAAbQCeATkA7ATABsAEbABMAEwATABNAJ6BsUCYAvZNducf9JHcnlUioIrHzvdiOoxtpw2O0YX3VAZxIOrK/PYP8kPQq6dl+q9jxOTa/AzNYmP2T+a75lQFwupPkznUBYrMzSUsz2Da/aUtEOcClJA5TjAhwKulaEpv5+A7GQG2FNU42s/8fJXmkmGryAxo/YFYAbP4SxN8kXVWEGkjmd004RoCpL1u/L0WC1OB3GPwmHM4jgDhGjAdJCNUNIgT9fslgbns4VJU/YNQXgz0mACBG3hmc3EEaGIo0RYgUcd8PP4/EDIBIRViK3CQMIG7M7iIUZJsrByTiRbQB+LQConBiAbZt1GedNFHQCwB+MsPfR/hPGv4FAE2BiiYsO0McL2EPj/qcCFBI5+ZEdyvf4YT9skzirbsFIFYl3W2cUdFZylbk76Frjr0R0dt5RBikhOvY1FByhbHnhnH9/J3hUZs6AIsIe4sdGqIsTssGZBkfIyZoQv7gDAVRFqffkPbiRax6joeEaBSvAmBuqEi0itcBDAGRJN4E0AciWbwNoAtElngKQA5EtngqQApEJ/EcgCYI1mKHW7vnbS0z98Ok6oo6HL9Z4rkR8MOUIXw+W7wrQFU6Oon3AXAIXlEGX0Srr522vMf13BrI2TvJduMAv9o2lX4LR6fmAAAAAElFTkSuQmCC")'
]

var i = 0;
document.getElementsByClassName("heart").onclick = function() {
    i = (i == 0) ? 1 : 0;
    document.getElementsByClassName("heart").style.backgroundImage = hearts[i];
}