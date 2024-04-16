import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Load Google Translate when component mounts
    if (window.google && window.google.translate) {
      loadGoogleTranslate();
    } else {
      // If Google Translate API script is not loaded, handle it here
      console.error("Google Translate API script is not loaded.");
    }
  }, []);

  function loadGoogleTranslate() {
    // Check if TranslateElement is available
    if (window.google.translate.TranslateElement) {
      new window.google.translate.TranslateElement(
        { pageLanguage: "uz" },
        "google_element"
      );
    } else {
      // If TranslateElement is not available, handle it here
      console.error("TranslateElement is not available.");
    }
  }

  return (
    <div>
      <h1>Hello Guys welcome to my channel</h1>
      <div id="google_element"></div>
    </div>
  );
};

export default GoogleTranslate;
