import { EDUCATION_spanish, EDUCATION_english } from "./EDUCATION";
import {
  WORK_EXPERIENCE_english,
  WORK_EXPERIENCE_spanish,
} from "./WORK_EXPERIENCE";

export const english = {
  personalInformation: "Personal information",
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
      "Enthusiastic about technology, programming, and learning something new every day. Wihth more than 4 years using Javascript and programming from an early age. Looking to improve my skills as programmer and as a person.",
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
    content: `Entusiasta de la tecnología, la programación y de aprender algo
    nuevo cada día. Con más de 4 años usando Javascript y programando
    desde temprana edad. Buscando mejorar mis habilidades como
    programador y como persona.`,
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