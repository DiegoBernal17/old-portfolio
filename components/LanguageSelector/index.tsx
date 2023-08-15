import React from "react";
import Image from "next/image";
import { useTranslation } from "../../i18n/client";
import styles from "./styles.module.css";

const LanguageSelector: React.FC<{ lng: string }> = ({ lng }) => {
  const { i18n } = useTranslation(lng, "translation");

  const changeLanguage = (language: "es" | "en") => () => {
    i18n.changeLanguage(language, (err) => {
      if (err) return console.log("something went wrong loading", err);
    });
  };

  return (
    <div className={styles.languageContainer}>
      <button onClick={() => window.print()} className={styles.downloadButton}>
        Download CV
      </button>
      <div className={styles.languageButton} onClick={changeLanguage("en")}>
        <Image
          src="/english.png"
          width={32}
          height={32}
          alt="English version"
        />
      </div>
      <div className={styles.languageButton} onClick={changeLanguage("es")}>
        <Image
          src="/spanish.png"
          width={32}
          height={32}
          alt="Spanish version"
        />
      </div>
    </div>
  );
};

export default LanguageSelector;
