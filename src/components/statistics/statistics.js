import PropsType from 'props-type';
import s from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={s.statList}>
        {stats.map(el => {
          return (
            <li className={s.statItem} key={el.id}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propsType = {
  title: PropsType.string,
  stats: PropsType.string,
};

export default Statistics;
