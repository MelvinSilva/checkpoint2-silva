import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const GameDetails = () => {
    const { id } = useParams(); 
    const [details, setDetails] = useState({});

    useEffect(() => { // appel de l'api
        axios
            .get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then((res) => setDetails(res.data));
    }, [id]);



    return (
        <div>
            <h1>{details.name}</h1>
            <img style={{ width: '700px' }} src={details.background_image} alt="ok" />
            <p> Note : {details.rating} / 5</p>
            {details.genres && <p>Genres : {details.genres.map((genre) => genre.name).join(', ')}</p>}
            {details.clip && <video autoPlay controls width="350">

                <source src={details.clip.clip}
                    type="video/webm" />
            </video>}
        </div>
    );
}

export default GameDetails;