/*
*
* index.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import Title from '../../atoms/title';
import PartnerImg_1 from '../../assets/partner1.jpg';
import PartnerImg_2 from '../../assets/partner2.jpg';
import PartnerImg_3 from '../../assets/partner3.jpg';
import PartnerImg_4 from '../../assets/partner4.jpg';
import './style.css';

const Partner = () => {
    var partnerImg = [PartnerImg_1, PartnerImg_2, PartnerImg_3, PartnerImg_2, PartnerImg_4];
    return (
        <section id="partner" class="section partner">
            <div class="wrapper">
                <Title heading="OUR PARTNERS"/>
                <div class="row t-center mt-40">
                    {partnerImg.map((item) => (
                        <div class="cell-1">
                            <img class="" src={item} alt="Partner images" width="130"/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Partner;