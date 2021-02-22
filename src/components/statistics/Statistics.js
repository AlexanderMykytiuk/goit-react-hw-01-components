import React from 'react';
import propTypes from 'prop-types';
import styles from "./Statistcs.module.css";


const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    
    <ul className={styles.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <li className={styles.item} key={id}>
          <span className={styles.label}>{label} </span>
          <span className = {styles.percentage}>{percentage}%</span>
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
