let html_per = 58;
let css_per = 40;
let js_per = 2;

document.getElementById("html-bar").style.backgroundColor = "orange";
document.getElementById("html-bar").style.width = `${html_per}%`;
document.getElementById("html-bar").style.borderRadius = "100px 0 0 100px";

document.getElementById("css-bar").style.backgroundColor = "purple";
document.getElementById("css-bar").style.width = `${css_per}%`;

document.getElementById("js-bar").style.backgroundColor = "yellow";
document.getElementById("js-bar").style.width = `${js_per}%`;
document.getElementById("js-bar").style.borderRadius = "0 100px 100px 0";

document.getElementById("html-color").style.backgroundColor = "orange";
document.getElementById("css-color").style.backgroundColor = "purple";
document.getElementById("js-color").style.backgroundColor = "yellow";

document.getElementById("html-text").innerText = `HTML : ${html_per}%`;
document.getElementById("css-text").innerText = `CSS : ${css_per}%`;
document.getElementById("js-text").innerText = `JS : ${js_per}%`;
