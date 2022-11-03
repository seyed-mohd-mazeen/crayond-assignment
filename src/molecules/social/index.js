/*
*
* index.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import img1 from '../../assets/f1.jpg';
import img2 from '../../assets/f2.jpg';
import img3 from '../../assets/f3.jpg';
import img4 from '../../assets/f4.jpg';
import img5 from '../../assets/f5.jpg';
import img6 from '../../assets/f6.jpg';
import SubTitle from '../../atoms/subtitle';
import './style.css';

const Social = () => {
    var instagramImg = [img1, img2, img3, img4, img5, img6];
    return (
        <section id="social" class="social">
            <div class="wrapper">
                <div class="row">
                    <div class="cell-1">
                        <h2 class="logo-text">Evento<strong>.</strong></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec gravida tempus. Integer iaculis in aazzzCurabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at volutpat ligula euismod.</p>
                        <span><i class="fa-brands fa-pinterest"></i><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-dribbble"></i><i class="fa-brands fa-instagram"></i></span>
                    </div>
                    <div class="cell-320w ml-20">
                        <SubTitle heading="INSTAGRAM"/>
                        <div class="grid-3">
                            {instagramImg.map((item, index) => (
                                <img key={index} src={item} width="100"/>
                            ))}  
                        </div>
                    </div>
                    <div class="cell-1 ml-20">
                        <SubTitle heading="SUBSCRIBE TO OUR NEWSLETTER"/>
                        <input type="text" placeholder="E-Mail here" class="newsletter-field"/>
                        <div class="btn-container">
                            <button class="secondary-btn">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default Social;