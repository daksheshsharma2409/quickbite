let languageData;
fetch("https://api.github.com/repos/daksheshsharma2409/quickbite/languages")
  .then((response) => response.json())
  .then((data) => {
    languageData = data;
    console.log(languageData);
    let t =
      languageData["HTML"] + languageData["CSS"] + languageData["JavaScript"];
    console.log(t);
    let html_per = ((languageData["HTML"] * 100) / t).toFixed(2);
    let css_per = ((languageData["CSS"] * 100) / t).toFixed(2);
    let js_per = ((languageData["JavaScript"] * 100) / t).toFixed(2);
    document.getElementById("html-text").innerText = `HTML : ${html_per}%`;
    document.getElementById("css-text").innerText = `CSS : ${css_per}%`;
    document.getElementById("js-text").innerText = `JS : ${js_per}%`;

    document.getElementById("html-bar").style.width = `${html_per}%`;
    document.getElementById("css-bar").style.width = `${css_per}%`;
    document.getElementById("js-bar").style.width = `${js_per}%`;
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
    fetch("gitbackup.json")
      .then((response) => response.json())
      .then((data) => {
        languageData = data;
        console.log(languageData);
        let t =
          languageData["HTML"] +
          languageData["CSS"] +
          languageData["JavaScript"];
        console.log(t);
        let html_per = ((languageData["HTML"] * 100) / t).toFixed(2);
        let css_per = ((languageData["CSS"] * 100) / t).toFixed(2);
        let js_per = ((languageData["JavaScript"] * 100) / t).toFixed(2);
        document.getElementById("html-text").innerText = `HTML : ${html_per}%`;
        document.getElementById("css-text").innerText = `CSS : ${css_per}%`;
        document.getElementById("js-text").innerText = `JS : ${js_per}%`;

        document.getElementById("html-bar").style.width = `${html_per}%`;
        document.getElementById("css-bar").style.width = `${css_per}%`;
        document.getElementById("js-bar").style.width = `${js_per}%`;
      })
      .catch((error) => {
        console.log("Error Fetching Stats");
      });
  });

document.getElementById("html-color").style.backgroundColor = "#E44D26";
document.getElementById("css-color").style.backgroundColor = "#1572B6";
document.getElementById("js-color").style.backgroundColor = "#F7DF1E";
