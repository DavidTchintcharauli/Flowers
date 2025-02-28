"use client";

import { useEffect, useState } from "react";
import i18n from "../utils/i18n";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "ka" : "en")}
      className="p-2 bg-blue-500 text-white rounded"
    >
      🌍 {i18n.t("change_language")}
    </button>
  );
}
