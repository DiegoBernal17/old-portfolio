import styles from "./style.module.css";

export interface EducationCardProps {
  school: string;
  start: string;
  end: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  school,
  start,
  end,
}) => (
  <div>
    <h3 className={styles.title}>{school}</h3>
    <small className={styles.dates}>
      {start} - {end}
    </small>
  </div>
);

export default EducationCard;
