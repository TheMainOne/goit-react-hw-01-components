import React from "react";
import propTypes from "prop-types";
import { Section, SectionTitle, Sectionlist, SectionItem } from "./Statistics.styled";

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <SectionTitle>{title}:</SectionTitle>}
      <Sectionlist>
        {stats.map((stat) => (
          <SectionItem key={stat.id} backgroundColor={getRandomHexColor()}>
            <span className="label">{stat.label}: </span>
            <span className="percentage">{stat.percentage}</span>
          </SectionItem>
        ))}
      </Sectionlist>
    </Section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  }))
};

