import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import EducationCard, { EducationCardProps } from "../components/EducationCard";
import LanguageSelector from "../components/LanguageSelector";
import WorkExperienceCard, {
  WorkExperienceCardProps,
} from "../components/WorkExperinceCard";
import styles from "../styles/Home.module.css";

const data = {
  location: "Saltillo, Coahuila, México",
  phoneNumber: "8442220828",
  email: "diego.bernal17@gmail.com",
  birthday: "17-01-1996",
  links: {
    linkedin: "https://linkedin.com/in/diegopbernal/",
    platzi: "https://platzi.com/p/diego-p-bernal/",
    github: "https://github.com/DiegoBernal17",
  },
  englishLevel: "B1",
  skills: {
    frontend: "HTML, CSS, Javascript, React, NextJS, Svelte",
    backend: "NodeJS, Express, NestJS, GraphQL",
    devops:
      "Linux, terminal, ssl, ssh, process monitoring, aws, deployments, CI/CD, Server provisioning, DBA",
    databases: "MariaDB, MongoDB, Firebase",
  },
};

const Home: NextPage = () => {
  const { t } = useTranslation();
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
            <p className={styles.description}>{t("description")}</p>
          </div>
          <div className={styles.personalData}>
            <h3>{t("personalInformation")}</h3>
            <p>
              <b>{t("location")}:</b>
              <br />
              {data.location}
            </p>
            <p>
              <b>{t("phoneNumber")}:</b>
              <br />
              {data.phoneNumber}
            </p>
            <p>
              <b>{t("email")}:</b>
              <br />
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </p>
            <p>
              <b>{t("birthday")}:</b>
              <br />
              {data.birthday}
            </p>
          </div>
          <div className={styles.divider} />
          <div className={styles.links}>
            <h3>Links</h3>
            <a href={data.links.linkedin} target="_blank" rel="noreferrer">
              Linkedin
            </a>
            <a href={data.links.platzi} target="_blank" rel="noreferrer">
              Platzi
            </a>
            <a href={data.links.github} target="_blank" rel="noreferrer">
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
              {t("languages.english")}: <b>{data.englishLevel}</b>
            </p>
          </div>
        </div>

        <div className={styles.rightSection}>
          <LanguageSelector />
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
                <b>Frontend:</b> {data.skills.frontend}
              </li>
              <li>
                <b>Backend:</b> {data.skills.backend}
              </li>
              <li>
                <b>DevOps:</b> {data.skills.devops}
              </li>
              <li>
                <b>{t("skills.database")}:</b> {data.skills.databases}
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
