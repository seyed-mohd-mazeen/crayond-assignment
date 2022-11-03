/*
*
* index.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import { useState } from 'react';
import './style.css';

const Timer = () => {
    const [hour, setHour] = useState("00");
    const [min, setMin] = useState("00");
    const [sec, setSec] = useState("00");

    function clock() {
        var d = new Date();
        setSec(d.getSeconds());
        setMin(d.getMinutes());
        setHour(d.getHours() %12); 
    }

    setInterval(clock,1000);
    
    return (
        <section id="timer" class="timer t-center">
            <div class="wrapper">
                <h4>Counter until the big event</h4>
                <div class="row t-center m-50 mw-1000">
                    <div class="cell-1">
                        <div class="timer-box">
                            <h6>00</h6>
                            <span>Weeks</span>
                        </div>
                    </div>
                    <div class="cell-1">
                        <div class="timer-box">
                            <h6>00</h6>
                            <span>Days</span>
                        </div>
                    </div>
                    <div class="cell-1">
                        <div class="timer-box">
                            <h6>{hour}</h6>
                            <span>Hours</span>
                        </div>
                    </div>
                    <div class="cell-1">
                        <div class="timer-box">
                            <h6>{min}</h6>
                            <span>Minutes</span>
                        </div>
                    </div>
                    <div class="cell-1">
                        <div  class="timer-box">
                            <h6>{sec}</h6>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timer;