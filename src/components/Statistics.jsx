import React from 'react';
import css from './Statistics.module.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statList}>
          {stats.map(stat => (
            <li
              key={stats.id}
              className={css.item}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Statistics;
