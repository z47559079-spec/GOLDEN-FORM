
const languageButton = document.getElementById("language-toggle");

function setLanguage(lang) {
  const isFa = lang === "fa";

  document.documentElement.lang = lang;
  document.documentElement.dir = isFa ? "rtl" : "ltr";

  document.querySelectorAll("[data-en][data-fa]").forEach((el) => {
    el.textContent = isFa ? el.dataset.fa : el.dataset.en;
  });

  if (languageButton) {
    languageButton.textContent = isFa ? "EN / English" : "FA / فارسی";
  }

  document.title = isFa
    ? "گلدن فرم | طراحی زیورآلات"
    : "GOLDEN FORM | Jewelry Design";

  try {
    localStorage.setItem("golden-form-language", lang);
  } catch (e) {}
}

if (languageButton) {
  languageButton.addEventListener("click", () => {
    const nextLang =
      document.documentElement.lang === "fa" ? "en" : "fa";

    setLanguage(nextLang);
  });
}

setLanguage("en");
