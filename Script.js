
const languageButton = document.getElementById("language-toggle");

function setLanguage(language) {
  const isPersian = language === "fa";

  document.documentElement.lang = language;
  document.documentElement.dir = isPersian ? "rtl" : "ltr";

  document.querySelectorAll("[data-en][data-fa]").forEach((element) => {
    element.textContent = isPersian
      ? element.dataset.fa
      : element.dataset.en;
  });

  languageButton.textContent = isPersian
    ? "EN / English"
    : "FA / فارسی";

  document.title = isPersian
    ? "گلدن فرم | آتلیه طراحی زیورآلات"
    : "GOLDEN FORM | Jewelry Design Atelier";

  try {
    localStorage.setItem("golden-form-language", language);
  } catch (error) {
    // The site still works if browser storage is unavailable.
  }
}

languageButton.addEventListener("click", () => {
  const currentLanguage = document.documentElement.lang;
  setLanguage(currentLanguage === "fa" ? "en" : "fa");
});

let savedLanguage = "en";

try {
  savedLanguage = localStorage.getItem("golden-form-language") || "en";
} catch (error) {
  // Use English as the default.
}

setLanguage(savedLanguage);
