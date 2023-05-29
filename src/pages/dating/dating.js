import React from "react";
import data from "../../data/data";
import { useState } from "react";
import "../../style/dating.css";
import List from "./List";
const Dating = () => {
  const [people, setPeople] = useState(data);

  const realoadAllItem = () => {
    setPeople(data);
  };

  const removeItem = (id) => {
    setPeople((oldValue) => {
      return oldValue.filter((item) => item.id !== id);
    });
  };
  return (
    <section className="sectionDating">
      <div className="ContainerDating">
        <h2 style={{ color: "var(--bg-blue)" }}>Prossimi incontri</h2>
        <div className="people-list">
          <List data={people} delete={removeItem} />
        </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={realoadAllItem}>
            Reload
          </button>
          <button className="btn btn-delete" onClick={() => setPeople([])}>
            Delete All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dating;
