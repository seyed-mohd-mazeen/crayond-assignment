/*
*
* index.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import { useState } from 'react';
import AboutData from '../../data/about.json';
import Title from '../../atoms/title';
import './style.css';

const About = () => {
    const [list, setList] = useState(AboutData);
    return (
        <section id="about" class="about section">
            <div class="wrapper">
                <Title heading="ABOUT THE EVENT"/>
                <div class="row mb-30">
                    <div class="cell-1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli. Integer iaculis in lacus a sollicitudin. Ut hendrerit hendrerit nisl a accumsan. Pellentesque convallis consectetur tortor id placerat. Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at volutpat ligula euismod.</p>
                    </div>
                    <div class="cell-1">
                        <p>In rhoncus massa nec sollicitudin. Ut hendrerit hendrerit nisl a accumsan. Pellentesque convallis consectetur tortor id placerat. Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at volutpat ligula euismod quis. Maecenas ornare, ex in malesuada tempus.</p>
                    </div>
                </div>
                <div class="row">
                    {list.map((item, index) => (
                        <div key={index} class="cell-1">
                            <div class="about-card">
                                <i class={item.icon}></i>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About;