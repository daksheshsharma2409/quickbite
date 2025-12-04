let languageData;
fetch("https://api.github.com/repos/daksheshsharma2409/quickbite/languages")
  .then((response) => response.json())
  .then((data) => {
    languageData = data;
    // console.log(languageData);
  });