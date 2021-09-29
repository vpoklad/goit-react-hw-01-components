import PropTypes from 'prop-types';
export default function Section({ title, children }) {
  return (
    <section>
      {' '}
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string,
};
