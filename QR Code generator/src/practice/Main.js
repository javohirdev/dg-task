import React, { useState } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Main = () => {
    const [image, setImage] = useState("");
    const [result, setResult] = useState([]);
    const ACCESS_KEY = "ORjLP9dTeIwITIRMcH8_yy6LXH9UamLLbD1s9Iw6dmM"; //UNSPLASH ACCESS KALITI

    const getVal = (event) => {
        setImage(event.target.value);
    }

    const getImg = () => {
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + ACCESS_KEY;
        axios.get(url).then((response) => {
            setResult(response.data.results);
            console.log(response)
        })
    }

    return (
        <>
            <h1 className='themeText'>📷Image Search app (DG Camp 2022 project)</h1>
            <div className='formSection'>
                <input
                    type="text"
                    name='image'
                    placeholder='Seach images...'
                    onChange={getVal}
                />
                <button onClick={getImg} type='submit'>Search</button>
            </div>

            <div className='results'>
                {result.map((image, id) => (
                    <div className='card' key={image.id}>
                       <a>
                           <LazyLoadImage 
                            className='resultImage'
                            src={image.urls.full}
                            effect="blur"
                            delayTime="300" //0.3s
                           />

                           <p className='username'>Photo by {image.user.name}</p>
                       </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Main;