import React from "react";

const OnePerson = ({ onePerson, setOnePerson }) => {
  const handleClick = () => {
    setOnePerson(null);
  };
  return (
    <>
      <article key={onePerson.id} className="person container">
        <img src={onePerson.image} alt={onePerson.name} />
        <div>
          <h4>{onePerson.name}</h4>
          <p>{onePerson.age}</p>
        </div>
        <button onClick={handleClick}>Back</button>
      </article>
    </>
  );
};

export default OnePerson;
