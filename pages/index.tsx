import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import EducationCard, { EducationCardProps } from "../components/EducationCard";
import WorkExperienceCard, {
  WorkExperienceCardProps,
} from "../components/WorkExperinceCard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: "es" | "en") => () => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("something went wrong loading", err);
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Curriculum vitae</title>
        <meta name="description" content="Mi Curriculum Vitae" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftSection}>
          <div className={styles.info}>
            <h2 className={styles.titleName}>
              Diego Ivan
              <br />
              Padilla Bernal
            </h2>
            <div className={styles.divider} style={{ width: 100 }} />
            <p className={styles.specialist}>Fullstack Javascript Developer</p>
          </div>
          <div className={styles.personalData}>
            <h3>{t("personalInformation")}</h3>
            <p>
              <b>{t("location")}:</b>
              <br />
              Saltillo, Coahuila, México
            </p>
            <p>
              <b>{t("phoneNumber")}:</b>
              <br />
              8442220828
            </p>
            <p>
              <b>{t("email")}:</b>
              <br />
              <a href="mailto:diego.bernal17@gmail.com">
                diego.bernal17@gmail.com
              </a>
            </p>
            <p>
              <b>{t("birthday")}:</b>
              <br />
              17-01-1996
            </p>
          </div>
          <div className={styles.divider} />
          <div className={styles.links}>
            <h3>Links</h3>
            <a
              href="https://linkedin.com/in/diegopbernal/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://platzi.com/p/diego-p-bernal/"
              target="_blank"
              rel="noreferrer"
            >
              Platzi
            </a>
            <a
              href="https://github.com/DiegoBernal17"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <div className={styles.divider} />
          <div className={styles.proficiencies}>
            <h3>{t("proficiencies.name")}</h3>
            <ul>
              {(
                t("proficiencies.content", { returnObjects: true }) as string[]
              ).map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className={styles.divider} />
          <div className={styles.languages}>
            <h3>{t("languages.title")}</h3>
            <p>
              {t("languages.spanish")}: <b>{t("languages.native")}</b>
            </p>
            <p>
              {t("languages.english")}: <b>B1</b>
            </p>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.languageContainer}>
            <div
              className={styles.languageButton}
              onClick={changeLanguage("en")}
            >
              <Image
                src="/english.png"
                width={32}
                height={32}
                alt="English version"
              />
            </div>
            <div
              className={styles.languageButton}
              onClick={changeLanguage("es")}
            >
              <Image
                src="/spanish.png"
                width={32}
                height={32}
                alt="Spanish version"
              />
            </div>
          </div>
          <div className={styles.professionalProfile}>
            <h2 className={styles.title}>{t("professionalProfile.title")}</h2>
            <p>{t("professionalProfile.content")}</p>
          </div>
          <div className={styles.workExperience}>
            <h2 className={styles.title}>{t("workExperience.title")}</h2>
            {(
              t("workExperience.content", {
                returnObjects: true,
              }) as WorkExperienceCardProps[]
            ).map((workExp, i) => (
              <WorkExperienceCard
                key={i}
                position={workExp.position}
                companyName={workExp.companyName}
                city={workExp.city}
                start={workExp.start}
                end={workExp.end}
                tasks={workExp.tasks}
              />
            ))}
          </div>
          <div className={styles.education}>
            <h2 className={styles.title}>{t("education.title")}</h2>
            {(
              t("education.content", {
                returnObjects: true,
              }) as Array<EducationCardProps>
            ).map((education, i) => (
              <EducationCard
                key={i}
                school={education.school}
                start={education.start}
                end={education.end}
              />
            ))}
          </div>
          <div className={styles.skills}>
            <h2 className={styles.title}>{t("skills.title")}</h2>
            <ul>
              <li>
                <b>Frontend:</b> HTML, CSS, Javascript, React, NextJS
              </li>
              <li>
                <b>Backend:</b> NodeJS, Express, NestJS, GraphQL
              </li>
              <li>
                <b>{t("skills.database")}:</b> MariaDB, MongoDB, Firebase
              </li>
              <li>{t("skills.others")}</li>
            </ul>
          </div>
          <div className={styles.participations}>
            <h2 className={styles.title}>{t("participations.title")}</h2>
            <p>{t("participations.content")}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
