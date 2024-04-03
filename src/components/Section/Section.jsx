import style from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={style.section}>
    <h2 className={style.sectionTitle}>{title}</h2>
    {children}
  </section>
);

export default Section;
