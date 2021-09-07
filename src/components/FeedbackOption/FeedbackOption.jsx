import Section from 'components/Section';
import s from 'components/FeedbackOption/FeedbackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Feedback options">
      {options.map(option => (
        <button className={s.button} name={option} key={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </Section>
  );
};

export default FeedbackOptions;
