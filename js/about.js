let languageData;
const updateDOM = (data) => {
  if (!data) {
    console.error("No language data available to process.");
    return;
  }
  const htmlBytes = data["HTML"] || 0;
  const cssBytes = data["CSS"] || 0;
  const jsBytes = data["JavaScript"] || 0;

  const totalBytes = htmlBytes + cssBytes + jsBytes;

  if (totalBytes === 0) {
    console.error(
      "Total bytes for HTML/CSS/JS is zero. Cannot calculate percentages."
    );
    return;
  }

  const html_per = ((htmlBytes * 100) / totalBytes).toFixed(2);
  const css_per = ((cssBytes * 100) / totalBytes).toFixed(2);
  const js_per = ((jsBytes * 100) / totalBytes).toFixed(2);

  document.getElementById("html-text").innerText = `HTML : ${html_per}%`;
  document.getElementById("css-text").innerText = `CSS : ${css_per}%`;
  document.getElementById("js-text").innerText = `JS : ${js_per}%`;

  document.getElementById("html-bar").style.width = `${html_per}%`;
  document.getElementById("css-bar").style.width = `${css_per}%`;
  document.getElementById("js-bar").style.width = `${js_per}%`;
};

fetch("https://api.github.com/repos/daksheshsharma2409/quickbite/languages")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`GitHub API returned status: ${response.status}`);
    }
  })
  .then((data) => {
    updateDOM(data);
  })
  .catch((primaryError) => {
    console.warn(`Primary fetch failed: ${primaryError.message}.`);
    console.log("can't fetch from api fetching from local");
    return fetch("gitbackup.json")
      .then((fallbackResponse) => {
        if (!fallbackResponse.ok) {
          throw new Error(
            `Fallback response was not OK: ${fallbackResponse.status}`
          );
        }
        return fallbackResponse.json();
      })
      .then((fallbackData) => {
        updateDOM(fallbackData);
      })
      .catch((fallbackError) => {
        console.error(
          "Both primary and fallback fetches failed:",
          fallbackError.message
        );
      });
  });
document.getElementById("html-color").style.backgroundColor = "#E44D26";
document.getElementById("css-color").style.backgroundColor = "#1572B6";
document.getElementById("js-color").style.backgroundColor = "#F7DF1E";
