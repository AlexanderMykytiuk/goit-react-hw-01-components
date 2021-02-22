import React from 'react';
import propTypes from 'prop-types';


const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <span className="label">{label} </span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  })).isRequired
}

export default Statistics;

// const Statistics = ({ statistic}) => (
//   <section className={styles.statistics}>
//     <h2>Задание №2</h2>
//     <h2 className={styles.title}>Upload stats</h2>
//     <ul>
//       {statistic.map(({ id, label, percentage }, index) => (
//         <li
//           className={styles.item}
//           key={id}
//           style={{ backgroundColor: colors[index] }}
//         >
//           <span className={styles.label}>{label}</span>
//           <span className={styles.percentage}>{percentage}%</span>
//         </li>
//       ))}
//     </ul>
//   </section>
// );