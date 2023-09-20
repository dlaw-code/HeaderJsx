/* eslint-disable react/prop-types */
import "./entry/Entry.css";

const Entry = (props) => {
  return (
    <div className="entryContainer">
      <div className="entrySubContainer">
        <h2 className="headings">{props.emoji}</h2>
        <h2 className="name">{props.name}</h2>
        <p className="meaning">{props.meaning}</p>
      </div>
    </div>
  );
};

export default Entry;
