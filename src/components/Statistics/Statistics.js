import PropTypes from 'prop-types';

import s from './Statistics.module.css';

function Statiscs({ title, stats = 0 }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(statsItem => (
          <li
            className={s.item}
            key={statsItem.id}
            style={{
              backgroundColor: `rgb(${getRandom(0, 255)}, ${getRandom(
                0,
                255,
              )}, ${getRandom(0, 255)})`,
            }}
          >
            <span className={s.label}>{statsItem.label}</span>
            <span className={s.percentage}>{statsItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
Statiscs.prototype = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default Statiscs;
