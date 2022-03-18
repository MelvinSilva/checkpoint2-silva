import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Game from './Game'

const GameList = () => {

    const [game, setGame] = useState([])
    const [filterRating, setFilterRating] = useState(false)

    useEffect(() => { // appel de l'api
        axios
            .get(`https://apis.wilders.dev/wild-games/games/`)
            .then((res) => setGame(res.data))
    }, [])


    const filtered = () => {   // trier les notes
        setFilterRating(!filterRating)
    }

    const deleteGame = id => {   // suppression jeu
        const sorted = game.filter(game => {
            return game.id !== id
        })
        setGame(sorted)
    }

    return (
        <div>
            <button onClick={filtered}>{!filterRating ? "AFFICHER LES NOTES >= 4.5" : "AFFICHER TOUS LES JEUX"}</button>
            {game.filter(filter => !filterRating || filter.rating >= 4.5).map((game) =>
                <Game key={game.id} game={game} deleteGame={deleteGame} />)}
        </div>
    );

}
export default GameList;