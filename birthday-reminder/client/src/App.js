import React, { useState } from "react";
import data from "./data";
import OnePerson from "./OnePerson";
import Show from "./Show";

function App() {
  const [people, setPeople] = useState(data);
  const [onePerson, setOnePerson] = useState(null);

  const handleClick = () => {
    setPeople([]);
  };

  const handleBirthdays = () => {
    setPeople(data);
  };

  if (onePerson != null) {
    return <OnePerson onePerson={onePerson} setOnePerson={setOnePerson} />;
  }
  if (people === data) {
    return (
      <main>
        <section className="container">
          <h3>{people.length} Birthdays today</h3>
          <Show
            people={people}
            setPeople={setPeople}
            setOnePerson={setOnePerson}
          />

          <button onClick={handleClick}>Clear All</button>
        </section>
      </main>
    );
  } else {
    return (
      <main>
        <section className="container">
          <h3>{people.length} Birthdays today</h3>
          <Show people={people} setPeople={setPeople} />

          <button onClick={handleBirthdays}>Show Birthdays</button>
        </section>
      </main>
    );
  }
}

export default App;
