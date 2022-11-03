/*
*
* index.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import './style.css';

const Venue = () => {
    return (
        <section id="venue" class="section">
            <div class="wrapper">
                <div class="slider-number">
                    <div class="row t-center">
                        <div class="cell-1"><span class="active-number">1</span></div>
                        <div class="cell-1"><span>2</span></div>
                        <div class="cell-1"><span>3</span></div>   
                    </div>
                </div>
                <div class="row ">
                    <div class="cell-1">
                        <div class="venue-box">
                            <div class="venue-icon">
                                <i class="fa-regular fa-calendar"></i>
                            </div>
                            <div class="venue-content">
                                <h5>DATE</h5>
                                <p>12-14 february 2018</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell-1">
                        <div class="venue-box">
                            <div class="venue-icon">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div class="venue-content">
                                <h5>LOCATION</h5>
                                <p>Los Angeles, CA.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell-1">
                        <div class="venue-box">
                            <div class="venue-icon">
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div class="venue-content">
                                <h5>SPEAKERS</h5>
                                <p>Natalie James + guests</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell-1">
                        <div class="venue-box">
                            <div class="venue-icon">
                                <i class="fa-solid fa-tag"></i>
                            </div>
                            <div class="venue-content">
                                <h5>TIKETS</h5>
                                <p>$65 early bird</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Venue;