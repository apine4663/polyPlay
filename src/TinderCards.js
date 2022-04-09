import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);
  //code that runs based on a condition
  useEffect(
    () => {
      //Code Runs.

      const unsubscribe = database
        .collection("people")
        .onSnapshot((snapshot) =>
          setPeople(snapshot.docs.map((doc) => doc.data()))
        );

      return () => {
        //cleanup
        unsubscribe();
      };
      //This will run when the component loads and never again unless component changes
    },
    //Component below
    []
  );
  //BAD
  // const people = [];
  // people.push('Alex', 'Em');
  //GOOD
  // setPeople([...people, 'Alex', 'Em'])
  return (
    <div>
      <h1>Tinder cards</h1>
      <div className="tinderCards__cardContainer">
        {" "}
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
