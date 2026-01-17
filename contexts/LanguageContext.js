"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("el"); // Greek as default
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved language preference only on client
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem("language");
      if (savedLang && (savedLang === "el" || savedLang === "en")) {
        setLanguage(savedLang);
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "el" ? "en" : "el";
    setLanguage(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem("language", newLang);
    }
  };

  const t = translations[language];

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
