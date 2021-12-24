import propTypes from "prop-types";
import { Section, SectionTitle, Sectionlist } from "./Statistics.styled";

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}

      <Sectionlist>
              {stats.map((stat) => (
          <li key={stat.id} className="item">
            <span className="label">{stat.label} </span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </Sectionlist>
    </Section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array,
};
