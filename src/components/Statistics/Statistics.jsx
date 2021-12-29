import React from "react";
import propTypes from "prop-types";
import { Section, SectionTitle, Sectionlist, SectionItem } from "./Statistics.styled";

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}

      <Sectionlist>
              {stats.map((stat) => (
          <SectionItem key={stat.id}>
            <span className="label">{stat.label}: </span>
            <span className="percentage">{stat.percentage}</span>
          </SectionItem>
        ))}
      </Sectionlist>
    </Section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  }))
};
