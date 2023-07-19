import { useState } from 'react';
import './Animal.css';
import bird from './../../assets/svg/bird.svg';
import cat from './../../assets/svg/cat.svg';
import cow from './../../assets/svg/cow.svg';
import dog from './../../assets/svg/dog.svg';
import gator from './../../assets/svg/gator.svg';
import horse from './../../assets/svg/horse.svg';
import heart from './../../assets/svg/heart.svg';

const svgMap = { bird, cat, cow, dog, gator, horse };

function Animal({ type }) {
    const [favorite, setFavorite] = useState(0);

    const favoriteHandler = () => {
        setFavorite(favorite + 1);
    }

    return(
        <div className="animal box" onClick={favoriteHandler}>
            <div className="media-wrapper">
                <img src={svgMap[type]} alt="animal" />
                <img 
                    src={heart} 
                    style={{ width : 10 + 10 * favorite +'px' }}
                    alt="heart" 
                    className="heart"/>
            </div>
        </div>
    )
}

export default Animal;