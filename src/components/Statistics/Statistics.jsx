import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return (
      <section className={ css.statistics}>
            <h2 className='title'>{title}</h2>
        <ul className={ css.stat_list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className="item" key={id} style={{ backgroundColor: getRandomHexColor() }}>
                            <span className={css.label}>{label  }</span>
                            <span className={css.percentage}>{percentage}%</span>
                        </li>
                    )
                })}
                
            </ul>
      </section>
      
    );
  
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};