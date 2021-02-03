import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = ({ id, order, title, dates, duties, company }) => {
  return (
    <section className="experience">
      <h2 className="experience-title">{title}</h2>
      <h3 className="company">{company}</h3>
      <h4 className="dates">{dates}</h4>
      <ul class="fa-ul">
        {duties.map((duty, index) => {
          return (
            <li key={index} className="duty">
              <FontAwesomeIcon
                icon="angle-double-right"
                style={{ color: "#2caeba" }}
                listItem
              />
              {duty}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Experience;
