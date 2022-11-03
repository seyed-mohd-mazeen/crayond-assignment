/*
*
* index.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import { useState } from 'react';
import CalendarData from '../../data/calendar.json';
import './style.css';

const Calendar = () => {
    const [list, setList] = useState(CalendarData);
    return (
        <section id="calendar" class="section">
            <div class="wrapper">
                <div class="event-table">
                    <div class="row bg-red t-left">
                        <h3 class="calendar-title"><i class="fa-regular fa-calendar"></i>Next Events Calendar</h3>
                    </div>
                    {list.map((item, index) => (
                        <div key={index} class="row mtb-40 a-center">
                            <div class="cell-1">
                                <img src={require(`../../assets/${item.imgName}`)}/>
                            </div>
                            <div class="cell-1 t-center">
                                <p class="table-date">{item.date}</p>
                                <span class="table-day">{item.month}</span>
                            </div>
                            <div class="cell-1 t-center">
                                <h5>{item.title}</h5>
                                <h6>{item.time}</h6>
                                <label>{item.info}</label>
                            </div>
                            <div class="cell-1 t-center mb-30">
                                <button class="primary-btn">READ MORE</button>
                            </div>
                            <div class="cell-130w t-center">
                                <a href="#">Buy Now</a>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Calendar;