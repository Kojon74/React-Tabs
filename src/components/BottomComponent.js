import React, { useState, useEffect } from "react";
import Experience from "./Experience";
import "./BottomComponent.css";

const endpoint = "https://course-api.com/react-tabs-project";

const BottomComponent = () => {
  const [experiences, setExperiences] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let res = await fetch(endpoint);
      res = await res.json();
      setExperiences(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <section className="bottom-component">
      <div className="left-tabs">
        {experiences.map((experience, i) => {
          return (
            <button
              key={experience.id}
              className={activeTab === i ? "tabs tabs-active" : "tabs"}
              style={{
                borderRight: activeTab === i ? "5px solid #2caeba" : "none",
              }}
              onClick={() => setActiveTab(3 - experience.order)}
            >
              {experience.company}
            </button>
          );
        })}
      </div>
      <Experience {...experiences[activeTab]} />
    </section>
  );
};

export default BottomComponent;
