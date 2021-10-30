import PropsType from 'props-type';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propsType = {
  title: PropsType.string,
  stats: PropsType.string,
};

export default Statistics;
