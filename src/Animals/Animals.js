import { useState } from 'react';
import Animal from './Animal/Animal';

function getRandomAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)]
}

function Animals() {
    const [count, setCount] = useState(0);
    const [animals, setAnimals] = useState(["cat", "dog"]);

    const addAnimalHandler = () => { 
        setAnimals([...animals, getRandomAnimal()]);
        setCount(count + 1);
    };

    const renderedAnimals = animals.map((animal, index) =>
        <div className="column is-mobile is-desktop is-2" key={index}>
            <Animal type={animal} />
        </div>
    )
    

    return(
        <div className=''>
            <section className="hero is-small is-info">
                <div className="hero-body">
                    <p className="title">Animals</p>
                </div> 
            </section>
            <div className="section container is-fluid">
                <button onClick={addAnimalHandler}  className="button is-link is-medium is-reponsive is-focused">Add Animal</button>
                <div className="columns is-multiline mt-6">{renderedAnimals}</div>
                {/* <br /><br /><p className="has-text-weight-bold is-size-3">Animals to show: {count}</p>
                <br /><br /><p className="has-text-weight-bold is-size-3">Animals : {animals} </p> */}
            </div>
        </div>
    )
}

export default Animals;