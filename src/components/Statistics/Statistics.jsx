import s from 'components/Statistics/Statistics.module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.statistics}>
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: {total}</li>
      <li className={s.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

export default Statistic;
