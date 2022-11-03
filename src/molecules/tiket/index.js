/*
*
* tiket.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import Title from '../../atoms/title';
import './style.css';

const Tiket = () => {
    return (
        <section id="tiket" class="tiket">
            <div class="wrapper">
                <div class="t-white">
                    <Title heading="GET YOUR TICKET"/>
                </div>
                <div class="row">
                    <div class="cell-1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec gravida tempus. Integer iaculis in aazzzCurabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at volutpat ligula euismod.</p>
                    </div>
                    <div class="cell-300w t-center h-right">
                        <button class="primary-btn">BUY NOW</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tiket;