/*
*
* index.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import './style.css';

const Title = (props) => {
    var title = props.heading;
    return (
       <>
        <div>
            <div class="topline"/>
        </div>
         <h3 class="title">{title}</h3>
       </>  
    )
}

export default Title;