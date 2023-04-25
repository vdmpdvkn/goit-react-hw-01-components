import propTypes from 'prop-types';
import css from './Statistics.module.css';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2 className={css.statisticsTitle}>Upload stats</h2>}
      <ul className={css.statisticsList}>
        {stats.map(element => {
          return (
            <li
              key={element.id}
              className={css.item}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className="label">{element.label}</span>
              <span className="percentage">{element.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      label: propTypes.string,
      percentage: propTypes.number,
    })
  ).isRequired,
};
