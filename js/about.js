let html_per = 62.1;
let css_per = 35.9;
let js_per = 2.0;

document.getElementById("html-bar").style.width = `${html_per}%`;
document.getElementById("css-bar").style.width = `${css_per}%`;
document.getElementById("js-bar").style.width = `${js_per}%`;

document.getElementById("html-color").style.backgroundColor = "#E44D26";
document.getElementById("css-color").style.backgroundColor = "#1572B6";
document.getElementById("js-color").style.backgroundColor = "#F7DF1E";

document.getElementById("html-text").innerText = `HTML : ${html_per}%`;
document.getElementById("css-text").innerText = `CSS : ${css_per}%`;
document.getElementById("js-text").innerText = `JS : ${js_per}%`;
