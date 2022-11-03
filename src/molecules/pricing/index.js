/*
*
* index.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import { useState } from 'react';
import PriceData from '../../data/price.json';
import Title from '../../atoms/title';
import './style.css';

const Pricing = () => {
    const [list, setList] = useState(PriceData)
    return (
        <section id="pricing" class="section">
            <div class="wrapper">
                <Title heading="PRICING TABLE"/>
                <div class="row">
                    {list.map((item, index) => (
                        <div key={index} class="cell-1">
                            <div class="price-card t-center active-card">
                                {item.isRecommended == true && 
                                    <div class="highlighted-box">
                                        RECOMMENDED
                                    </div>
                                }
                                <h4 class="price-header">{item.title}</h4>
                                <h6 class="price-subheader">{item.subtitle}</h6>
                                <h2 class="price-value">{item.price}</h2>
                                <ul class="price-feature-list">
                                    <li>Early Entrance</li>
                                    <li>Front seat</li>
                                    <li>Complementary Drinks</li>
                                    <li>Promo Gift</li>
                                </ul>
                                <button class="primary-btn mt-30">PURCHASE</button>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing;