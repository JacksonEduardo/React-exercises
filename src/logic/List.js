import React from "react";
import { RiDeleteBack2Line } from "react-icons/ri";

const List = (props) => {
  return (
    <ul style={{ color: "var(--bg-blue)" }} className="user-list">
      {props.data.map((person) => (
        <li key={person.id}>
          <Person {...person} canc={props.delete} />
        </li>
      ))}
    </ul>
  );
};

const Person = ({ id, nome, stato, img, canc }) => {
  return (
    <article>
      <img src={img} alt="prs" className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn" onClick={() => canc(id)}>
            <RiDeleteBack2Line className="icon" />
          </button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;
