import { EDUCATION_spanish, EDUCATION_english } from "./EDUCATION";
import {
  WORK_EXPERIENCE_english,
  WORK_EXPERIENCE_spanish,
} from "./WORK_EXPERIENCE";

export const english = {
  personalInformation: "Personal information",
  description:
    "Building quality websites and applications with HTML, CSS, and JavaScript.",
  location: "Location",
  phoneNumber: "Phone number",
  email: "Email",
  birthday: "Birthday",
  proficiencies: {
    name: "Proficiencies",
    content: [
      "Organization",
      "Proactivity",
      "Responsibility",
      "Problems resolution",
      "Teamwork",
      "Independent Learning",
    ],
  },
  languages: {
    title: "Languages",
    spanish: "Spanish",
    english: "English",
    native: "First language",
  },
  professionalProfile: {
    title: "Professional profile",
    content:
      "Enthusiastic about technology, programming and learning something new every day. With more than 4 years of experience with Javascript. I have been a programmer from an early age. I seek to improve my skills as a programmer and as a person. I like to teach and motivate other people what I have learned and how to improve their skills. I'm a person who is passionate about quality in code.",
  },
  workExperience: {
    title: "Work experience",
    content: WORK_EXPERIENCE_english,
  },
  education: {
    title: "Education",
    content: EDUCATION_english,
  },
  skills: {
    title: "Technical skills",
    database: "Database",
    others: "And other technologies.",
  },
  participations: {
    title: "Participations and assists",
    content:
      "Programming and networking competitions. Online courses, congresses, talks, Talent land and hackathons.",
  },
};

export const spanish = {
  personalInformation: "Datos personales",
  description:
    "Construyendo sitios y aplicaciones web de calidad con HTML, CSS y Javascript",
  location: "Ubicación",
  phoneNumber: "Teléfono",
  email: "Correo electrónico",
  birthday: "Fecha de nacimiento",
  proficiencies: {
    name: "Competencias",
    content: [
      "Organización",
      "Proactividad",
      "Responsabilidad",
      "Resolución de problemas",
      "Trabajo en equipo",
      "Aprendizaje independiente",
    ],
  },
  languages: {
    title: "Idiomas",
    spanish: "Español",
    english: "Inglés",
    native: "Primer idioma",
  },
  professionalProfile: {
    title: "Perfil profesional",
    content: `Entusiasta de la tecnología, de la programación y de aprender algo nuevo cada día. Con más de 4 años de experiencia usando Javascript y programador desde temprana edad. Busco mejorar mis habilidades como programador y como persona. Me gusta enseñar y motivar a otras personas de lo que he aprendido y de cómo mejorar sus habilidades. Persona apasionada por la calidad en el código y las buenas prácticas.`,
  },
  workExperience: {
    title: "Experiencia laboral",
    content: WORK_EXPERIENCE_spanish,
  },
  education: {
    title: "Formación",
    content: EDUCATION_spanish,
  },
  skills: {
    title: "Habilidades técnicas",
    database: "Base de datos",
    others: "Entre otras tecnologías más.",
  },
  participations: {
    title: "Participaciones y asistencias",
    content:
      "Concursos de programación y de redes. Cursos en linea, congresos, pláticas, Talent land y hackatons.",
  },
};
