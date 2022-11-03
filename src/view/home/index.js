/*
*
* index.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import Slider from '../../molecules/slider';
import Venue from '../../molecules/venue';
import Timer from '../../molecules/timer';
import About from '../../molecules/about';
import Speaker from '../../molecules/speaker';
import Pricing from '../../molecules/pricing';
import Calendar from '../../molecules/calendar';
import Partner from '../../molecules/partner';
import Tiket from '../../molecules/tiket';
import Social from '../../molecules/social';

const HomePage = () => {
    return (
        <>
        <Slider/>
        <Venue/>
        <Timer/>
        <About/>
        <Speaker/>
        <Pricing/>
        <Calendar/>
        <Partner/>
        <Tiket/>
        <Social/>
       </>
    )
}

export default HomePage;