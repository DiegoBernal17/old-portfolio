import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { DICTIONARY } from "../CONST/DICTIONARY";
import EducationCard, { EducationCardProps } from "../components/EducationCard";
import WorkExperienceCard, {
  WorkExperienceCardProps,
} from "../components/WorkExperinceCard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { locale, defaultLocale, push } = useRouter();
  const localeKey = locale || defaultLocale || "en-US";
  const language = DICTIONARY[localeKey];

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
            <h3>{language.personalInformation}</h3>
            <p>
              <b>{language.location}:</b>
              <br />
              Saltillo, Coahuila, México
            </p>
            <p>
              <b>{language.phoneNumber}:</b>
              <br />
              8442220828
            </p>
            <p>
              <b>{language.email}:</b>
              <br />
              <a href="mailto:diego.bernal17@gmail.com">
                diego.bernal17@gmail.com
              </a>
            </p>
            <p>
              <b>{language.birthday}:</b>
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
            <h3>{language.proficiencies.name}</h3>
            <ul>
              {language.proficiencies.content.map((p: string) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className={styles.divider} />
          <div className={styles.languages}>
            <h3>{language.languages.title}</h3>
            <p>
              {language.languages.spanish}: <b>{language.languages.native}</b>
            </p>
            <p>
              {language.languages.english}: <b>B1</b>
            </p>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.languageContainer}>
            <div
              className={styles.languageButton}
              onClick={() => push("/", undefined, { locale: "es-MX" })}
            >
              <Image
                src="/spanish.png"
                width={32}
                height={32}
                alt="Spanish version"
              />
            </div>
            <div
              className={styles.languageButton}
              onClick={() => push("/", undefined, { locale: "en-US" })}
            >
              <Image
                src="/english.png"
                width={32}
                height={32}
                alt="English version"
              />
            </div>
          </div>
          <div className={styles.professionalProfile}>
            <h2 className={styles.title}>
              {language.professionalProfile.title}
            </h2>
            <p>{language.professionalProfile.content}</p>
          </div>
          <div className={styles.workExperience}>
            <h2 className={styles.title}>{language.workExperience.title}</h2>
            {language.workExperience.content.map(
              (workExp: WorkExperienceCardProps, i: number) => (
                <WorkExperienceCard
                  key={i}
                  position={workExp.position}
                  companyName={workExp.companyName}
                  city={workExp.city}
                  start={workExp.start}
                  end={workExp.end}
                  tasks={workExp.tasks}
                />
              )
            )}
          </div>
          <div className={styles.education}>
            <h2 className={styles.title}>{language.education.title}</h2>
            {language.education.content.map(
              (education: EducationCardProps, i: number) => (
                <EducationCard
                  key={i}
                  school={education.school}
                  start={education.start}
                  end={education.end}
                />
              )
            )}
          </div>
          <div className={styles.skills}>
            <h2 className={styles.title}>{language.skills.title}</h2>
            <ul>
              <li>
                <b>Frontend:</b> HTML, CSS, Javascript, React, NextJS
              </li>
              <li>
                <b>Backend:</b> NodeJS, Express, NestJS, GraphQL
              </li>
              <li>
                <b>{language.skills.database}:</b> MariaDB, MongoDB, Firebase
              </li>
              <li>{language.skills.others}</li>
            </ul>
          </div>
          <div className={styles.participations}>
            <h2 className={styles.title}>{language.participations.title}</h2>
            <p>{language.participations.content}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
