function scrollLeft(id) {
    document.getElementById(id).scrollBy({
        left: -300,
        behavior: "smooth"
    });
}

function scrollRight(id) {
    document.getElementById(id).scrollBy({
        left: 300,
        behavior: "smooth"
    });
}
