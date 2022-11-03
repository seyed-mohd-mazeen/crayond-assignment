/*
*
* index.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import './style.css';

const SubTitle = (props) => {
    var subtitle = props.heading;
    return (
       <>
        <div>
            <div class="topline"/>
        </div>
         <h4 class="social-title">{subtitle}</h4>
       </>  
    )
}

export default SubTitle;