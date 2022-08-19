import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: "es" | "en") => () => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("something went wrong loading", err);
    });
  };

  return (
    <div className={styles.languageContainer}>
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
