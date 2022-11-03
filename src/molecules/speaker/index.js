/*
*
* index.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import { useState } from 'react';
import SpeakerData from '../../data/speaker.json';
import Title from '../../atoms/title';
import './style.css';

const Speaker = () => {
    const [list, setList] = useState(SpeakerData)
    return (
        <section id="speaker" class="speaker">
           <div class="wrapper">
                <Title heading="Our Speaker"/>
           </div>
            <div class="grid-4">
                {list.map((items, index) => (
                    <div key={index} class="cover">
                        <div  class={`speaker-img speaker${index+1}`}>
                            <div class="speaker-info">
                                <h5 class="name">{items.name}</h5>
                                <p>{items.designation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Speaker;