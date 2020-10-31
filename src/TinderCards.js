import React, {useState, useEffect, unsubscribe} from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';


function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        //this will run ONCE when the component loads, and never again

        database
            .collection('people')
            .onSnapshot(snapshot => (
                setPeople(snapshot.docs.map(doc => doc.data()))
        ));

            return (() => {
                // this is the cleanup...
                unsubscribe();
            })


    }, [])


    return (
        <div>
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
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
    )
}

export default TinderCards
