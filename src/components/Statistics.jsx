import propTypes from "prop-types";

export default function Statistics({ title, stats }) {
    console.log(stats);
    return <section className="statistics"> 
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
            {stats.map(stat => <li className="item">
                    <span className="label">{stat.label} </span>
                <span className="percentage">{stat.percentage}</span>
            </li>)}
        </ul>
    </section>;
}

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.array,
}
