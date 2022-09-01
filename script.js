const Lightmode = document.querySelector("#Lightmode");
const p = document.querySelector("p");
const html = document.querySelector("html");

Lightmode.addEventListener("click", () => {

    p.setAttribute("id", "lp");
    html.style.backgroundColor = "whitesmoke";

});

const Darkmode = document.querySelector("#Darkmode");

Darkmode.addEventListener("click", () => {

    p.removeAttribute("id");
    html.style.backgroundColor = "black";
});