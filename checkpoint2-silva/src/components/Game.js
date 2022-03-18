import React from 'react';
import { Link } from 'react-router-dom';

const Game = ( {game, deleteGame}) => {


    return (
        <div>
            <Link to={`/games/${game.id}`}>
                <h2>{game.name}</h2>
                <img width="300" src={game.background_image} alt="" />
            </Link>
            <p>Note : {game.rating}/5</p>
            <button className='delete-game' onClick={() => deleteGame(game.id)}>Supprimer</button>
        </div>
    );
};

export default Game;