import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    loadGoogleTranslate();
  }, []);

  function loadGoogleTranslate() {
    if (window.google.translate.TranslateElement) {
      new window.google.translate.TranslateElement(
        { pageLanguage: "uz", includedLanguages: "en,ru,uz" },
        "google_element"
      );
    } else {
      console.error("TranslateElement is not available.");
    }
  }

  return (
    <div>
      <div id="google_element"></div>
    </div>
  );
};

export default GoogleTranslate;
