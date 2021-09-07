import s from 'components/Section/Section.module.css';

const Section = ({ title, children }) => (
  <>
    {title && <h2 className={s.section}>{title}</h2>}
    {children}
  </>
);
export default Section;
