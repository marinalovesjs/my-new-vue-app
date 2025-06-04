function toggleText() {
    let element = document.getElementById("secret");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
