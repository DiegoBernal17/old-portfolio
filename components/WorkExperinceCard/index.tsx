import styles from "./style.module.css";

interface IProps {
  position: string;
  companyName?: string;
  city?: string;
  start: string;
  end: string;
  tasks: string[];
}

const WorkExperienceCard: React.FC<IProps> = ({
  position,
  companyName,
  city,
  start,
  end,
  tasks,
}) => (
  <div className={styles.card}>
    <h3 className={styles.title}>
      {position}
      {companyName && `, ${companyName}`}
      {city && `, ${city}`}
    </h3>
    <small className={styles.dates}>
      {start} - {end}
    </small>
    <div>
      {tasks.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </div>
  </div>
);

export default WorkExperienceCard;
